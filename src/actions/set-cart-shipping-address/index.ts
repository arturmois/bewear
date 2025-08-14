"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";

import { db } from "@/db";
import { cartTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import {
  type SetCartShippingAddressSchema,
  setCartShippingAddressSchema,
} from "./schema";

export const setCartShippingAddress = async (
  data: SetCartShippingAddressSchema,
) => {
  setCartShippingAddressSchema.parse(data);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  const address = await db.query.shippingAddressTable.findFirst({
    where: (shippingAddress, { eq }) =>
      eq(shippingAddress.id, data.shippingAddressId) &&
      eq(shippingAddress.userId, session.user.id),
  });
  if (!address) {
    throw new Error("Shipping address not found");
  }
  const cart = await db.query.cartTable.findFirst({
    where: (cart, { eq }) => eq(cart.userId, session.user.id),
  });
  if (!cart) {
    const [newCart] = await db
      .insert(cartTable)
      .values({ userId: session.user.id, shippingAddressId: address.id })
      .returning();
    return newCart;
  }
  const [updatedCart] = await db
    .update(cartTable)
    .set({ shippingAddressId: data.shippingAddressId })
    .where(eq(cartTable.id, cart.id))
    .returning();
  return updatedCart;
};


