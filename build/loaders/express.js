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
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const passport_1 = __importDefault(require("passport"));
const passport_config_1 = __importDefault(require("../config/passport.config"));
const expressLoader = (_a) => __awaiter(void 0, [_a], void 0, function* ({ app }) {
    // Middleware para procesar datos JSON
    app.use(body_parser_1.default.json());
    // Middleware para registrar solicitudes en la conspassport: passport.PassportStaticola 
    app.use((0, morgan_1.default)('dev'));
    // Middleware para permitir solicitudes de dominios diferentes 
    app.use((0, cors_1.default)());
    // Middleware para agregar encabezados de seguridad 
    app.use((0, helmet_1.default)());
    // Middleware para comprimir las respuestas 
    app.use((0, compression_1.default)());
    // Inicializar Passport.js
    app.use(passport_1.default.initialize());
    // Configurar Passport.js con la estrategia JWT
    (0, passport_config_1.default)();
});
exports.default = expressLoader;
