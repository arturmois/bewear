import { z } from "zod";

export const setCartShippingAddressSchema = z.object({
  shippingAddressId: z.uuid(),
});

export type SetCartShippingAddressSchema = z.infer<
  typeof setCartShippingAddressSchema
>;


