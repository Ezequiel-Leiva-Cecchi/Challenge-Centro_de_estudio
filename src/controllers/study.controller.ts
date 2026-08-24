import { NextFunction, Request, Response } from 'express';
import { StudyService } from '../services/studyService';
import { StudyData } from '../types/studyTypes';
import { isValidObjectId, toDate, toTrimmedString } from '../utils/validation';

const studyService = new StudyService();

export const createStudy = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const body = (req.body ?? {}) as Record<string, unknown>;
    const patientId = toTrimmedString(body.patientId);
    const studyType = toTrimmedString(body.studyType);
    const results = toTrimmedString(body.results);
    const date = toDate(body.date);

    if (!isValidObjectId(patientId) || !studyType || !results || !date) {
      res.status(400).json({
        error: {
          code: 'INVALID_STUDY_DATA',
          message: 'patientId, studyType, results y date son obligatorios y deben tener un formato válido.',
        },
      });
      return;
    }

    const studyData: StudyData = { patientId, studyType, results, date };
    const study = await studyService.createStudy(studyData);
    res.status(201).json({ data: { study } });
  } catch (error) {
    next(error);
  }
};

export const getAllStudies = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const patientId = req.params.pId;
    if (!isValidObjectId(patientId)) {
      res.status(400).json({
        error: {
          code: 'INVALID_PATIENT_ID',
          message: 'El ID del paciente no es válido.',
        },
      });
      return;
    }

    const studies = await studyService.getStudiesByPatient(patientId);
    res.status(200).json({
      data: { studies },
      meta: { total: studies.length },
    });
  } catch (error) {
    next(error);
  }
};
