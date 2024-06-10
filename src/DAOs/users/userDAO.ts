import { userMongoose } from "./user.mongoose";

// DAO para gestionar la interacción con la base de datos de usuarios
let userDAO: userMongoose;

const DAO_OPTION = process.env.DAO_OPTION || 'mongoose';

switch (DAO_OPTION) {
    case 'mongoose':
        userDAO = new userMongoose();
        break;
    default:
        userDAO = new userMongoose();
}

export { userDAO };
