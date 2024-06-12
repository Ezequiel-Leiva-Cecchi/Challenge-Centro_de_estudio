import Study from '../../models/studyModel';
import { StudyData } from '../../../types/studyTypes';

export class StudyMongoose {
    // Método para crear un nuevo estudio
    async createStudy(studyData: StudyData) {
        return await Study.create(studyData);  
    }

    // Método para obtener todos los estudios de un paciente
    async getAllStudies(patientId: string) {
        return await Study.find({ patientId }).lean();  
    }
}