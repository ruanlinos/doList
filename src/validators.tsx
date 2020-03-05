import { AddressProps } from './types';

export const validate = async (values: AddressProps) => {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = '*Required';
  }
  if (!values.city) {
    errors.city = '*Required';
  }
  if (!values.addressNumber) {
    errors.addressNumber = '*Required';
  }
  if (!values.postalCode) {
    errors.postalCode = '*Required';
  }
  if (!values.addressState) {
    errors.addressState = '*Required';
  }
  if (!values.street) {
    errors.street = '*Required';
  }
  if (!values.neighborhood) {
    errors.neighborhood = '*Required';
  }

  return errors;
};
