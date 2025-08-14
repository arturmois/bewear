"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
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
  const [successDialogOpen, setSuccessDialogOpen] = useState(true);
  const { mutate: finishOrder, isPending } = useFinishOrder();
  return (
    <>
      <Button
        className="w-full rounded-full"
        size="lg"
        disabled={isPending}
        onClick={() => finishOrder()}
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
            <Button className="w-full rounded-full" variant="outline">
              Página inicial
            </Button>
            <Button className="h-10 w-full rounded-full">
              Ver meus pedidos
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FinishOrderButton;
