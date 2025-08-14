"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useFinishOrder } from "@/hooks/mutations/use-finish-order";

const FinishOrderButton = () => {
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const { mutate: finishOrder, isPending } = useFinishOrder();
  const handleFinishOrder = () => {
    finishOrder();
    setSuccessDialogOpen(true);
  };
  return (
    <>
      <Button
        className="w-full rounded-full"
        size="lg"
        disabled={isPending}
        onClick={handleFinishOrder}
      >
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        Finalizar compra
      </Button>
      <Dialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen}>
        <DialogContent className="space-y-4 text-center">
          <Image
            src="/illustration.svg"
            alt="Success"
            width={300}
            height={300}
            className="mx-auto"
          />
          <DialogTitle className="text-2xl font-bold">
            Pedido realizado com sucesso!
          </DialogTitle>
          <DialogDescription className="font-medium">
            Seu pedido foi realizado com sucesso. Acompanhe o status da sua
            compra no seu e-mail.
          </DialogDescription>
          <DialogFooter>
            <Button className="w-full rounded-full" variant="outline" asChild>
              <Link href="/">Página inicial</Link>
            </Button>
            <Button className="h-10 w-full rounded-full" asChild>
              <Link href="/orders">Ver meus pedidos</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinishOrderButton;
