import { useMutation, useQueryClient } from "@tanstack/react-query";

import { increaseCartProduct } from "@/actions/increase-cart-product";

import { getCartQueryKey } from "../queries/use-cart";

export const getIncreaseCartProductMutationKey = (productVariantId: string) =>
  ["increase-cart-product", productVariantId] as const;

export const useIncreaseCartProduct = (productVariantId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: getIncreaseCartProductMutationKey(productVariantId),
    mutationFn: () => increaseCartProduct({ productVariantId, quantity: 1 }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getCartQueryKey() }),
  });
};