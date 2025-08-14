import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCentsToBRL } from "@/helpers/money";

interface CartSummaryProps {
  subtotalInCents: number;
  totalInCents: number;
  products: {
    id: string;
    name: string;
    variantName: string;
    quantity: number;
    priceInCents: number;
    imageUrl: string;
  }[];
}

const CartSummary = ({
  subtotalInCents,
  totalInCents,
  products,
}: CartSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo do pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <p className="text-sm">Subtotal</p>
          <p className="text-muted-foreground text-sm font-medium">
            {formatCentsToBRL(subtotalInCents)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Frete</p>
          <p className="text-muted-foreground text-sm font-medium">Grátis</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Total</p>
          <p className="text-muted-foreground text-sm font-medium">
            {formatCentsToBRL(totalInCents)}
          </p>
        </div>
        <div className="py-3">
          <Separator />
        </div>
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={product.imageUrl}
                alt={product.variantName}
                width={78}
                height={78}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-muted-foreground text-xs font-medium">
                  {product.variantName}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between gap-1">
              <p className="text-sm font-semibold">
                {formatCentsToBRL(product.priceInCents * product.quantity)}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CartSummary;
