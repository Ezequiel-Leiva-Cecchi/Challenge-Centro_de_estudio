export interface UserStreet {
  number: string;
  postalCode: string;
  floor?: string;
  apartment?: string;
}

export interface IUser {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  street: UserStreet;
}
