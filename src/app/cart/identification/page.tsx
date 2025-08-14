import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getCart } from "@/actions/get-cart";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { db } from "@/db";
import { shippingAddressTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import CartSummary from "../components/cart-summary";
import Addresses from "./components/addresses";

const IdentificationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }
  const cart = await getCart();
  if (!cart || cart.items.length === 0) {
    redirect("/");
  }
  const shippingAddresses = await db.query.shippingAddressTable.findMany({
    where: eq(shippingAddressTable.userId, session.user.id),
  });
  return (
    <div className="space-y-12">
      <Header />
      <div className="space-y-5 px-5">
        <Addresses
          shippingAddresses={shippingAddresses}
          defaultSelectedAddress={cart.shippingAddress?.id ?? null}
        />
        <CartSummary
          subtotalInCents={cart.totalInCents}
          totalInCents={cart.totalInCents}
          products={cart.items.map((item) => ({
            id: item.productVariant.id,
            name: item.productVariant.product.name,
            variantName: item.productVariant.name,
            priceInCents: item.productVariant.priceInCents,
            quantity: item.quantity,
            imageUrl: item.productVariant.imageUrl,
          }))}
        />
      </div>
      <Footer />
    </div>
  );
};

export default IdentificationPage;
