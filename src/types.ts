export interface AddressProps {
  firstName: string;
  city: string;
  addressState: string;
  postalCode: string;
  addressNumber: number;
  street: string;
  neighborhood: string;
}

export interface IAddress extends AddressProps {
  id: string;
}
