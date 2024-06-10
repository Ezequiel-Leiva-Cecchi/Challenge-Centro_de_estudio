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
exports.AppointmentService = void 0;
const appointmentDAO_1 = require("../DAOs/appointment/appointmentDAO");
const axios_config_1 = __importDefault(require("../config/axios.config"));
class AppointmentService {
    createAppointment(appointmentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAppointment = yield appointmentDAO_1.appointmentDAO.create(appointmentData);
            const response = yield axios_config_1.default.post('/appointmemt', newAppointment);
            console.log('Response from external appointment service:', response.data);
            return newAppointment;
        });
    }
    getAllAppointments() {
        return __awaiter(this, void 0, void 0, function* () {
            const appointments = yield appointmentDAO_1.appointmentDAO.getAll();
            const response = yield axios_config_1.default.get('/allAppointments');
            console.log('Response from external appointment service:', response.data);
            return appointments;
        });
    }
}
exports.AppointmentService = AppointmentService;
