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
exports.getAllAppointment = exports.createAppointment = void 0;
const appointmentService_1 = require("../../services/appointmentService");
const appointmentService = new appointmentService_1.AppointmentService();
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.fecha || !req.body.tipoEstudio) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const appointmentData = req.body;
        const appointment = yield appointmentService.createAppointment(appointmentData);
        return res.status(201).json(appointment);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createAppointment = createAppointment;
const getAllAppointment = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield appointmentService.getAllAppointments();
        res.status(200).json(appointments);
    }
    catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Appointments not found' });
    }
});
exports.getAllAppointment = getAllAppointment;
