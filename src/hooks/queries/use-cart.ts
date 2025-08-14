import { useQuery } from "@tanstack/react-query";

import { getCart } from "@/actions/get-cart";

export const getCartQueryKey = () => ["cart"] as const;

export const useCart = (params?: { initialData?: Awaited<ReturnType<typeof getCart>> }) => {
  return useQuery({
    queryKey: getCartQueryKey(),
    queryFn: () => getCart(),
    initialData: params?.initialData,
  });
};