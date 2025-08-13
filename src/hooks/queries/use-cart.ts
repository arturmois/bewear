import { getCart } from "@/actions/get-cart";
import { useQuery } from "@tanstack/react-query";

export const getCartQueryKey = () => ["cart"] as const;

export const useCart = () => {
  return useQuery({
    queryKey: getCartQueryKey(),
    queryFn: () => getCart(),
  });
};