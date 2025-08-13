import { useQuery } from "@tanstack/react-query";

import { getShippingAddresses } from "@/actions/get-shipping-addresses";
import { shippingAddressTable } from "@/db/schema";

export const getShippingAddressesQueryKey = () =>
  ["shipping-addresses"] as const;

export const useShippingAddresses = ({ initialData }: { initialData: (typeof shippingAddressTable.$inferSelect)[] }) => {
  return useQuery({
    queryKey: getShippingAddressesQueryKey(),
    queryFn: getShippingAddresses,
    initialData,
  });
};


