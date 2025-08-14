import { useMutation, useQueryClient } from "@tanstack/react-query";

import { setCartShippingAddress } from "@/actions/set-cart-shipping-address";
import { SetCartShippingAddressSchema } from "@/actions/set-cart-shipping-address/schema";
import { getUseCartQueryKey } from "@/hooks/queries/use-cart";

export const getSetCartShippingAddressMutationKey = (
  shippingAddressId?: string,
) => ["set-cart-shipping-address", shippingAddressId] as const;

export const useSetCartShippingAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: getSetCartShippingAddressMutationKey(),
    mutationFn: (data: SetCartShippingAddressSchema) =>
      setCartShippingAddress(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getUseCartQueryKey() }),
  });
};
