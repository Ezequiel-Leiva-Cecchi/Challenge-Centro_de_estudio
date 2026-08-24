import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    street: {
      number: { type: String, required: true, trim: true },
      postalCode: { type: String, required: true, trim: true },
      floor: { type: String, trim: true },
      apartment: { type: String, trim: true },
    },
  },
  { timestamps: true },
);

const userModel = model('User', userSchema);
export default userModel;
