"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointment_controller_1 = require("../controllers/appointment.controller");
const authMiddleware_1 = require("../middleware/authMiddleware");
const appointmentRouter = (0, express_1.Router)();
// POST /api/appointments - Creación de Turnos
appointmentRouter.post("/appointment", authMiddleware_1.requireAuth, appointment_controller_1.createAppointment);
// GET /api/appointments - Consulta de Turnos
appointmentRouter.get("/allAppointment", authMiddleware_1.requireAuth, appointment_controller_1.getAllAppointment);
exports.default = appointmentRouter;
