"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";

import { db } from "@/db";
import { cartTable, orderItemTable, orderTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export async function finishOrder() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  const cart = await db.query.cartTable.findFirst({
    where: eq(cartTable.userId, session.user.id),
    with: {
      items: {
        with: {
          productVariant: true,
        },
      },
      shippingAddress: true,
    },
  });
  if (!cart) {
    throw new Error("Cart not found");
  }
  if (!cart.shippingAddress) {
    throw new Error("Shipping address not found");
  }
  const totalInCents = cart.items.reduce(
    (acc, item) => acc + item.productVariant.priceInCents * item.quantity,
    0,
  );
  const order = await db.transaction(async (tx) => {
    const shippingAddress = cart.shippingAddress!;
    const [order] = await tx
      .insert(orderTable)
      .values({
        ...shippingAddress,
        userId: session.user.id,
        totalInCents,
        shippingAddressId: shippingAddress.id,
      })
      .returning();
    if (!order) {
      throw new Error("Order not created");
    }
    const orderItemPayload: Array<typeof orderItemTable.$inferInsert> =
      cart.items.map((item) => ({
        orderId: order.id,
        productVariantId: item.productVariantId,
        quantity: item.quantity,
        priceInCents: item.productVariant.priceInCents,
      }));
    await tx.insert(orderItemTable).values(orderItemPayload);
    await tx.delete(cartTable).where(eq(cartTable.id, cart.id));
    return order;
  });
  return order;
}
