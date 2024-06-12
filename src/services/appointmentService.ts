import { AppointmentData } from '../types/appointmentTypes';  
import { appointmentDAO } from '../api/DAOs/appointment/appointmentDAO';  
import axiosInstance from '../config/axios.config';  
// Definición de la clase AppointmentService
export class AppointmentService {
    // Método asíncrono para crear una nueva cita
    async createAppointment(appointmentData: AppointmentData) {
        // Llama al método create del DAO para crear una nueva cita en la base de datos
        const newAppointment = await appointmentDAO.create(appointmentData);
        // Realiza una solicitud HTTP POST a un servicio externo para enviar la nueva cita
        const response = await axiosInstance.post('/appointments/appointment', newAppointment);
        console.log(response);

        // Retorna la nueva cita creada
        return newAppointment;
    }
    
    // Método asíncrono para obtener todas las citas
    async getAllAppointments() {
        // Llama al método getAll del DAO para obtener todas las citas de la base de datos
        const appointments = await appointmentDAO.getAll();
        // Realiza una solicitud HTTP GET a un servicio externo para obtener todas las citas
        const response = await axiosInstance.get('/appointments/allAppointments');
        console.log( response);

        return appointments;
    }
}