import { StudyData } from '../types/studyTypes';  
import { studyDAO } from '../api/DAOs/study/studyDAO'; 
import axiosInstance from '../config/axios.config';  

// Definición de la clase studyService
export class studyService {
    // Método asíncrono para crear un nuevo estudio
    async createStudy(studyData: StudyData) {
        // Llama al método createStudy del DAO para crear un nuevo estudio en la base de datos
        const newStudy = await studyDAO.createStudy(studyData);
        // Realiza una solicitud HTTP POST a un servicio externo para enviar el nuevo estudio
        const response = await axiosInstance.post('/studies/study', newStudy);
        console.log('Response from external study service:', response.data);

        // Retorna el nuevo estudio creado
        return newStudy;
    }
    
    // Método asíncrono para obtener todos los estudios de un paciente específico
    async getAllStudies(patientId: string) {
        const studies = await studyDAO.getAllStudies(patientId);
        // Realiza una solicitud HTTP GET a un servicio externo para obtener los estudios del paciente
        const response = await axiosInstance.get(`/studies/study/${patientId}`);
        console.log('Response from external study service:', response.data);

        return studies;
    }
}