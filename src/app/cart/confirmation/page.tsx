import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getCart } from "@/actions/get-cart";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";

import CartSummary from "../components/cart-summary";
import { formatAddress } from "../helpers/address";

const ConfirmationPage = async () => {
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
  if (!cart.shippingAddress) {
    redirect("/cart/identification");
  }
  return (
    <div>
      <Header />
      <div className="space-y-5 px-5">
        <Card>
          <CardHeader>
            <CardTitle>Endereço de entrega</CardTitle>
          </CardHeader>
          <CardContent>
            <Card>
              <CardContent>
                <p className="text-sm font-medium">
                  {formatAddress(cart.shippingAddress)}
                </p>
              </CardContent>
            </Card>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full" size="lg">
              Finalizar compra
            </Button>
          </CardFooter>
        </Card>
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
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default ConfirmationPage;
