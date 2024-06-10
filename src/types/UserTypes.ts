export interface IUser{
    name: string;
    phone: string;
    email: string;
    password: string;
    passwordConfirm:string;
    street: {
        number: { type: String, required: true },
        postalCode: { type: String, required: true },
        floor: { type: String },
        apartment: { type: String }
    };
}