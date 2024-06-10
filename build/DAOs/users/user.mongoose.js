"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMongoose = void 0;
const usersModel_1 = __importDefault(require("../../models/usersModel"));
// Clase para interactuar con la base de datos MongoDB usando Mongoose
class userMongoose {
    // Método para crear un nuevo usuario
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usersModel_1.default.create(user);
        });
    }
    // Método para obtener un usuario por su email
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usersModel_1.default.findOne({ email });
        });
    }
}
exports.userMongoose = userMongoose;
