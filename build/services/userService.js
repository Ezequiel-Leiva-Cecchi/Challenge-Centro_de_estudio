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
exports.UserService = void 0;
const userDAO_1 = require("../DAOs/users/userDAO");
const bcrypt_1 = require("../utils/bcrypt");
const JWT_1 = require("../utils/JWT");
const axios_config_1 = __importDefault(require("../config/axios.config"));
class UserService {
    // Método para registrar un nuevo usuario
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user.password = yield (0, bcrypt_1.hashPassword)(user.password);
                const createdUser = yield userDAO_1.userDAO.createUser(user);
                const response = yield axios_config_1.default.post('/singup', createdUser);
                console.log('Response from external user service:', response.data);
                return createdUser;
            }
            catch (error) {
                console.error(error);
                throw new Error("Error creating user");
            }
        });
    }
    // Método para iniciar sesión de usuario
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userDAO_1.userDAO.getUserByEmail(email);
                if (!user) {
                    throw new Error("Invalid email or password");
                }
                const isPasswordValid = yield (0, bcrypt_1.comparePassword)(password, user.password);
                if (!isPasswordValid) {
                    throw new Error("Invalid email or password");
                }
                const token = (0, JWT_1.generateToken)({ userId: user._id });
                const response = yield axios_config_1.default.post('/login', { email, token });
                console.log('Response from external auth service:', response.data);
                return { token };
            }
            catch (error) {
                console.error(error);
                throw new Error("Error authenticating user");
            }
        });
    }
}
exports.UserService = UserService;
