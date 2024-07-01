import { Router } from 'express';
import { createAppointment, getAllAppointment } from '../controllers/appointment.controller';
import { requireAuth } from '../middleware/authMiddleware';

const appointmentRouter = Router();

// POST /api/appointments - Creación de Turnos
appointmentRouter.post('/appointment', requireAuth, createAppointment);

// GET /api/appointments - Consulta de Turnos
appointmentRouter.get('/allAppointment', requireAuth, getAllAppointment);

export default appointmentRouter;
