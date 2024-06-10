import appointmentModel from '../../models/appointmentModel';
import { AppointmentData } from '../../types/appointmentTypes';

export class AppointmentMongoose {
    // Método para crear una nueva cita
    async create(appointmentData: AppointmentData) {
        const appointment = new appointmentModel(appointmentData);  
        await appointment.save();  
        return appointment.toObject();  
    }

    // Método para obtener todas las citas
    async getAll() {
        return appointmentModel.find().lean(); 
    }
}