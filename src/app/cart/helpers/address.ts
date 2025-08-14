export const formatAddress = (address: {
  street: string;
  number: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}) => {
  return `${address.street}, ${address.number}, ${address.complement ?? ""}
   ${address.neighborhood}, ${address.city}, ${address.state}, ${address.zipCode}`;
};
