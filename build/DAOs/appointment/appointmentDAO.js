"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentDAO = void 0;
const appointment_mongoose_1 = require("./appointment.mongoose");
let appointmentDAO;
const DAO_OPTION = process.env.DAO_OPTION || 'mongoose';
switch (DAO_OPTION) {
    case 'mongoose':
        exports.appointmentDAO = appointmentDAO = new appointment_mongoose_1.AppointmentMongoose();
        break;
    default:
        exports.appointmentDAO = appointmentDAO = new appointment_mongoose_1.AppointmentMongoose();
}
