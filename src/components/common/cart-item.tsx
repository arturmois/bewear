import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { formatCentsToBRL } from "@/helpers/money";
import { useDecreaseCartProduct } from "@/hooks/mutations/use-decrease-cart-product";
import { useIncreaseCartProduct } from "@/hooks/mutations/use-increase-cart-product";
import { useRemoveProductFromCart } from "@/hooks/mutations/use-remove-product-from-cart";

import { Button } from "../ui/button";

interface CartItemProps {
  id: string;
  productName: string;
  productVariantName: string;
  productVariantId: string;
  productVariantImageUrl: string;
  productVariantPriceInCents: number;
  quantity: number;
}

const CartItem = ({
  id,
  productName,
  productVariantName,
  productVariantId,
  productVariantImageUrl,
  productVariantPriceInCents,
  quantity,
}: CartItemProps) => {
  const removeProductFromCartMutation = useRemoveProductFromCart(id);
  const increaseCartProductQuantityMutation =
    useIncreaseCartProduct(productVariantId);
  const decreaseCartProductQuantityMutation = useDecreaseCartProduct(id);
  const handleDeleteClick = () =>
    removeProductFromCartMutation.mutate(undefined, {
      onSuccess: () => toast.success("Produto removido do carrinho"),
      onError: () => toast.error("Erro ao remover produto do carrinho"),
    });
  const handleIncrementQuantityClick = () =>
    increaseCartProductQuantityMutation.mutate(undefined, {
      onSuccess: () => toast.success("Produto adicionado ao carrinho"),
      onError: () => toast.error("Erro ao adicionar produto ao carrinho"),
    });
  const handleDecreaseQuantityClick = () =>
    decreaseCartProductQuantityMutation.mutate(undefined, {
      onSuccess: () => toast.success("Produto removido do carrinho"),
      onError: () => toast.error("Erro ao remover produto do carrinho"),
    });
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={productVariantImageUrl}
          alt={productVariantName}
          width={78}
          height={78}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">{productName}</p>
          <p className="text-muted-foreground text-xs font-medium">
            {productVariantName}
          </p>
          <div className="flex w-[100px] items-center justify-between rounded-lg border">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecreaseQuantityClick}
            >
              <MinusIcon />
            </Button>
            <span>{quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleIncrementQuantityClick}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between gap-1">
        <p className="text-sm font-semibold">
          {formatCentsToBRL(productVariantPriceInCents * quantity)}
        </p>
        <Button variant="outline" size="icon" onClick={handleDeleteClick}>
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
