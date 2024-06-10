import { Request, Response } from 'express';
import { studyService } from '../../services/studyService';
import { StudyData } from '../../types/studyTypes';

const StudyService = new studyService();

// Controlador para crear un estudio
export const createStudy = async (req: Request, res: Response) => {
    try {
        const { patientId, studyType, results, date } = req.body;
        if (!patientId || !studyType || !results || !date) {
            return res.status(400).json({ message: 'Missing required fields' });  
        }
        const studyData: StudyData = { patientId, studyType, results, date };
        const newStudy = await StudyService.createStudy(studyData);  
        return res.status(201).json(newStudy);  
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });  
    }
};

// Controlador para obtener todos los estudios de un paciente
export const getAllStudies = async (req: Request, res: Response) => {
    try {
        const patientId = req.params.pId;
        const studies = await StudyService.getAllStudies(patientId);  
        return res.status(200).json(studies);  
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });  
    }
};
