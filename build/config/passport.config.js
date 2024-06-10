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
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const usersModel_1 = __importDefault(require("../models/usersModel"));
const config_1 = require("../config/config");
if (!config_1.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
}
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config_1.JWT_SECRET,
};
const passportConfig = () => {
    passport_1.default.use(new passport_jwt_1.Strategy(options, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield usersModel_1.default.findById(payload.patientId);
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        }
        catch (error) {
            return done(error, false);
        }
    })));
};
exports.default = passportConfig;
