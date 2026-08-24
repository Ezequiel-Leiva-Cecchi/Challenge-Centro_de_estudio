import { Router } from 'express';
import { createAppointment, getAllAppointment } from '../controllers/appointment.controller';
import {
  requireAuth,
  requirePatientBodyAccess,
  requirePatientParamAccess,
} from '../middleware/authMiddleware';

const appointmentRouter = Router();

appointmentRouter.post('/', requireAuth, requirePatientBodyAccess, createAppointment);
appointmentRouter.get('/patient/:pId', requireAuth, requirePatientParamAccess, getAllAppointment);

appointmentRouter.post('/appointment', requireAuth, requirePatientBodyAccess, createAppointment); // Alias legado
appointmentRouter.get('/appointment/:pId', requireAuth, requirePatientParamAccess, getAllAppointment); // Alias legado

export default appointmentRouter;
