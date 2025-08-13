import { z } from "zod";

export const createShippingAddressSchema = z.object({
  email: z.email("E-mail inválido"),
  fullName: z.string().min(1, "Nome completo inválido"),
  cpf: z.string().min(14, "CPF inválido"),
  phone: z.string().min(15, "Celular inválido"),
  zipCode: z.string().min(9, "CEP inválido"),
  street: z.string().min(1, "Endereço inválido"),
  number: z.string().min(1, "Número inválido"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Bairro inválido"),
  city: z.string().min(1, "Cidade inválida"),
  state: z.string().min(1, "Estado inválido"),
});

export type CreateShippingAddressSchema = z.infer<typeof createShippingAddressSchema>;
