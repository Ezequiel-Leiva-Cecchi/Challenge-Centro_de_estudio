import { StudyData } from '../types/studyTypes';  
import { studyDAO } from '../api/DAOs/study/studyDAO'; 

// Definición de la clase studyService
export class studyService {
    // Método asíncrono para crear un nuevo estudio
    async createStudy(studyData: StudyData) {
        // Llama al método createStudy del DAO para crear un nuevo estudio en la base de datos
        const newStudy = await studyDAO.createStudy(studyData);
        
        // Retorna el nuevo estudio creado
        return newStudy;
    }
    
    // Método asíncrono para obtener todos los estudios de un paciente específico
    async getAllStudies(patientId: string) {
        const studies = await studyDAO.getAllStudies(patientId);

        return studies;
    }
}