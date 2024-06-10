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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const userService_1 = require("./../../services/userService");
const userService = new userService_1.UserService();
// Controlador para el registro de usuarios
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        // Llama al servicio para registrar un nuevo usuario
        const newUser = yield userService.signup(userData);
        res.status(201).json(newUser); // Devuelve el nuevo usuario creado
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.signup = signup;
// Controlador para el inicio de sesión de usuarios
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Llama al servicio para iniciar sesión con el email y contraseña proporcionados
        const result = yield userService.login(email, password);
        res.json(result); // Devuelve el token de acceso generado
    }
    catch (error) {
        console.error(error);
        res.status(401).json({ message: "Unauthorized" });
    }
});
exports.login = login;
