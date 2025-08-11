"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { addProductToCart } from "@/actions/add-cart-product";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  productVariantId: string;
  quantity: number;
}

const AddToCartButton = ({
  productVariantId,
  quantity,
}: AddToCartButtonProps) => {
  const queryClient = useQueryClient();
  const { mutate: addToCart, isPending: isAddingToCart } = useMutation({
    mutationKey: ["addProductToCart", productVariantId, quantity],
    mutationFn: async () =>
      addProductToCart({
        productVariantId,
        quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return (
    <Button
      className="rounded-full"
      size="lg"
      variant="outline"
      disabled={isAddingToCart}
      onClick={() => addToCart()}
    >
      {isAddingToCart ? (
        <Loader2 className="animate-spin" />
      ) : (
        "Adicionar ao carrinho"
      )}
    </Button>
  );
};

export default AddToCartButton;
