import { useMutation, useQueryClient } from "@tanstack/react-query";

import { decreaseCartProduct } from "@/actions/decrease-cart-product";

import { getCartQueryKey } from "../queries/use-cart";

export const getDecreaseCartProductMutationKey = (
  cartItemId: string
) => ["decrease-cart-product", cartItemId] as const;

export const useDecreaseCartProduct = (cartItemId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: getDecreaseCartProductMutationKey(cartItemId),
    mutationFn: () => decreaseCartProduct({ cartItemId }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getCartQueryKey() }),
  });
};