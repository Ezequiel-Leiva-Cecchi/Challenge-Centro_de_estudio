import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    street: {
        number: { type:Number, required: true },
        postalCode: { type:Number, required: true },
        floor: { type:Number },
        apartment: { type: String }
    }
})

const userModel = mongoose.model('User', userSchema);
export default userModel;