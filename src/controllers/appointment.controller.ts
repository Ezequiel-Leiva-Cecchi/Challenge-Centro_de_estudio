import { Request, Response } from "express";
import { AppointmentData } from "../types/appointmentTypes";
import { AppointmentService } from "../services/appointmentService";

const appointmentService = new AppointmentService();

export const createAppointment = async (req: Request, res: Response) => {
  try {
    console.log("Request Body:", req.body);
    if (!req.body.date || !req.body.reason) {
      return res.status(400).json({ message: "Missing required" });
    }
    const appointmentData: AppointmentData = req.body;
    const appointment = await appointmentService.createAppointment(
      appointmentData
    );
    console.log("Created Appointment:", appointment);
    return res.status(201).json(appointment);
  } catch (error) {
    console.error("Error in createAppointment:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllAppointment = async (_req: Request, res: Response) => {
  try {
    const appointments = await appointmentService.getAllAppointments();
    console.log("All Appointments:", appointments);
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error in getAllAppointment:", error);
    res.status(404).json({ message: "Appointments not found" });
  }
};
