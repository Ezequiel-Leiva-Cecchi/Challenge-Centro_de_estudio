"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDAO = void 0;
const user_mongoose_1 = require("./user.mongoose");
// DAO para gestionar la interacción con la base de datos de usuarios
let userDAO;
const DAO_OPTION = process.env.DAO_OPTION || 'mongoose';
switch (DAO_OPTION) {
    case 'mongoose':
        exports.userDAO = userDAO = new user_mongoose_1.userMongoose();
        break;
    default:
        exports.userDAO = userDAO = new user_mongoose_1.userMongoose();
}
