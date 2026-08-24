import { Router } from 'express';
import { createStudy, getAllStudies } from '../controllers/study.controller';
import { requireAuth } from '../middleware/authMiddleware';

const studyRouter = Router();

studyRouter.post('/', requireAuth, createStudy);
studyRouter.get('/patient/:pId', requireAuth, getAllStudies);

studyRouter.post('/study', requireAuth, createStudy); // Alias legado
studyRouter.get('/study/:pId', requireAuth, getAllStudies); // Alias legado

export default studyRouter;
