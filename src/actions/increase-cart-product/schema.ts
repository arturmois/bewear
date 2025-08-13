import { z } from "zod";

export const increaseCartProductSchema = z.object({
  productVariantId: z.uuid(),
  quantity: z.number().min(1),
});

export type IncreaseCartProductSchema = z.infer<typeof increaseCartProductSchema>;
