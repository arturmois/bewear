"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { type NumberFormatValues, PatternFormat } from "react-number-format";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCreateShippingAddress } from "@/hooks/mutations/use-create-shipping-address";

const Addresses = () => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const schema = z.object({
    email: z.email("E-mail inválido"),
    fullName: z.string().min(1, "Nome completo obrigatório"),
    cpf: z
      .string()
      .min(14, "CPF obrigatório")
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    phone: z.string().min(15, "Celular obrigatório"),
    zipCode: z.string().min(9, "CEP obrigatório"),
    street: z.string().min(1, "Endereço obrigatório"),
    number: z.string().min(1, "Número obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().min(1, "Bairro obrigatório"),
    city: z.string().min(1, "Cidade obrigatória"),
    state: z.string().min(1, "Estado obrigatório"),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      fullName: "",
      cpf: "",
      phone: "",
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const createAddress = useCreateShippingAddress();
  const onSubmit = async (values: z.infer<typeof schema>) => {
    await createAddress.mutateAsync(values, {
      onSuccess: () => {
        toast.success("Endereço criado com sucesso");
        form.reset();
        setSelectedAddress(null);
      },
      onError: (error) => {
        toast.error("Erro ao criar endereço", {
          description: error.message,
        });
        console.error(error);
      },
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Identificação</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
          <Card>
            <CardContent>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="add_new" id="add_new" />
                <Label htmlFor="add_new">Adicionar novo endereço</Label>
              </div>
            </CardContent>
          </Card>
        </RadioGroup>
        {selectedAddress === "add_new" && (
          <div className="mt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                          <PatternFormat
                            format="###.###.###-##"
                            mask="_"
                            value={field.value}
                            onValueChange={(v: NumberFormatValues) =>
                              field.onChange(v.formattedValue)
                            }
                            customInput={Input}
                            placeholder="000.000.000-00"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Celular</FormLabel>
                        <FormControl>
                          <PatternFormat
                            format="(##) #####-####"
                            mask="_"
                            value={field.value}
                            onValueChange={(v: NumberFormatValues) =>
                              field.onChange(v.formattedValue)
                            }
                            customInput={Input}
                            placeholder="(00) 00000-0000"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP</FormLabel>
                        <FormControl>
                          <PatternFormat
                            format="#####-###"
                            mask="_"
                            value={field.value}
                            onValueChange={(v: NumberFormatValues) =>
                              field.onChange(v.formattedValue)
                            }
                            customInput={Input}
                            placeholder="00000-000"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endereço</FormLabel>
                        <FormControl>
                          <Input placeholder="Rua, avenida, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número</FormLabel>
                        <FormControl>
                          <Input placeholder="Número" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="complement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complemento</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Apartamento, bloco, referência..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="neighborhood"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bairro</FormLabel>
                        <FormControl>
                          <Input placeholder="Bairro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input placeholder="Cidade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <FormControl>
                          <Input placeholder="Estado" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={createAddress.isPending}>
                    {createAddress.isPending
                      ? "Salvando..."
                      : "Salvar endereço"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Addresses;
