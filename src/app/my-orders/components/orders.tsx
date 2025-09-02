"use client";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { orderTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

interface OrdersProps {
  orders: Array<{
    id: string;
    status: (typeof orderTable.$inferInsert)["status"];
    totalInCents: number;
    createdAt: Date;
    items: Array<{
      id: string;
      productName: string;
      productVariantName: string;
      imageUrl: string;
      priceInCents: number;
      quantity: number;
    }>;
  }>;
}
const Orders = ({ orders }: OrdersProps) => {
  return (
    <>
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem key={order.id} value={order.id}>
                <AccordionTrigger>
                  <div className="flex flex-col gap-1">
                    {order.status === "pending" && (
                      <Badge variant="outline">Pagamento pendente</Badge>
                    )}
                    {order.status === "paid" && (
                      <Badge variant="outline">Pago</Badge>
                    )}
                    {order.status === "canceled" && (
                      <Badge variant="destructive">Cancelado</Badge>
                    )}
                    Pedido feito em{" "}
                    {order.createdAt.toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {order.items.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.imageUrl}
                          alt={product.productVariantName}
                          width={78}
                          height={78}
                          className="rounded-lg"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-semibold">
                            {product.productName}
                          </p>
                          <p className="text-muted-foreground text-xs font-medium">
                            {product.productVariantName} x {product.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between gap-1">
                        <p className="text-sm font-semibold">
                          {formatCentsToBRL(
                            product.priceInCents * product.quantity,
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="py-3">
                    <Separator />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <p className="text-sm">Subtotal</p>
                      <p className="text-muted-foreground text-sm font-medium">
                        {formatCentsToBRL(order.totalInCents)}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Frete</p>
                      <p className="text-muted-foreground text-sm font-medium">
                        Grátis
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Total</p>
                      <p className="text-sm font-semibold">
                        {formatCentsToBRL(order.totalInCents)}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Orders;
