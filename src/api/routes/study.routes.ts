import { Router } from 'express';
import { createStudy, getAllStudies } from '../controllers/study.controller';
import { requireAuth } from '../middleware/authMiddleware';

const studyRouter = Router();

// POST /api/studies/- crear estudio

studyRouter.post('/study', requireAuth, createStudy);

// GET /api/studies/ - Obtener estudio con el id del paciente 
studyRouter.get('/study/:pId', requireAuth, getAllStudies);

export default studyRouter;
