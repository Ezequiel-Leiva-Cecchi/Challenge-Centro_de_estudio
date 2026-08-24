import { Router } from 'express';
import { createAppointment, getAllAppointment } from '../controllers/appointment.controller';
import { requireAuth } from '../middleware/authMiddleware';

const appointmentRouter = Router();

appointmentRouter.post('/', requireAuth, createAppointment);
appointmentRouter.get('/patient/:pId', requireAuth, getAllAppointment);

appointmentRouter.post('/appointment', requireAuth, createAppointment); // Alias legado
appointmentRouter.get('/appointment/:pId', requireAuth, getAllAppointment); // Alias legado

export default appointmentRouter;
