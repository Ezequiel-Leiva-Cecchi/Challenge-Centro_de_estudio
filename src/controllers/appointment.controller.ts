import { Request, Response } from "express";
import { AppointmentData } from "../types/appointmentTypes";
import { AppointmentService } from "../services/appointmentService";

const appointmentService = new AppointmentService();

// Controlador para crear una cita
export const createAppointment = async (req: Request, res: Response) => {
    try {
        if (!req.body.fecha || !req.body.tipoEstudio) {
            return res.status(400).json({ message: 'Missing required fields' });  
        }
        const appointmentData: AppointmentData = req.body;
        const appointment = await appointmentService.createAppointment(appointmentData);  
        return res.status(201).json(appointment); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });  
    }
}

// Controlador para obtener todas las citas
export const getAllAppointment = async (_req: Request, res: Response) => {
    try {
        const appointments = await appointmentService.getAllAppointments();  
        res.status(200).json(appointments);  
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Appointments not found' }); 
    }
}
