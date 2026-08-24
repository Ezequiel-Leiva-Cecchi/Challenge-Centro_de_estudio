import { Router } from 'express';
import { createStudy, getAllStudies } from '../controllers/study.controller';
import {
  requireAuth,
  requirePatientParamAccess,
  requireRoles,
} from '../middleware/authMiddleware';

const studyRouter = Router();

studyRouter.post('/', requireAuth, requireRoles('doctor', 'admin'), createStudy);
studyRouter.get('/patient/:pId', requireAuth, requirePatientParamAccess, getAllStudies);

studyRouter.post('/study', requireAuth, requireRoles('doctor', 'admin'), createStudy); // Alias legado
studyRouter.get('/study/:pId', requireAuth, requirePatientParamAccess, getAllStudies); // Alias legado

export default studyRouter;
