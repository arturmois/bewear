import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Header from "@/components/common/header";
import { db } from "@/db";
import { orderTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import Orders from "./components/orders";

const MyOrdersPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/login");
  }
  const orders = await db.query.orderTable.findMany({
    where: eq(orderTable.userId, session.user.id),
    with: {
      items: {
        with: {
          productVariant: {
            with: {
              product: true,
            },
          },
        },
      },
    },
  });
  return (
    <div>
      <Header />
      <div className="space-y-5 px-5">
        <h1 className="text-2xl font-bold">Meus pedidos</h1>
        <Orders
          orders={orders.map((order) => ({
            id: order.id,
            status: order.status,
            totalInCents: order.totalInCents,
            createdAt: order.createdAt,
            items: order.items.map((item) => ({
              id: item.id,
              productName: item.productVariant.product.name,
              productVariantName: item.productVariant.name,
              imageUrl: item.productVariant.imageUrl,
              priceInCents: item.priceInCents,
              quantity: item.quantity,
            })),
          }))}
        />
      </div>
    </div>
  );
};

export default MyOrdersPage;
