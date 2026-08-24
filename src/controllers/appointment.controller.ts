import { NextFunction, Request, Response } from 'express';
import { AppointmentData } from '../types/appointmentTypes';
import { AppointmentService } from '../services/appointmentService';
import { isValidObjectId, toDate, toTrimmedString } from '../utils/validation';

const appointmentService = new AppointmentService();

export const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const body = (req.body ?? {}) as Record<string, unknown>;
    const patientId = toTrimmedString(body.patientId);
    const doctorId = toTrimmedString(body.doctorId);
    const reason = toTrimmedString(body.reason);
    const date = toDate(body.date);

    if (!isValidObjectId(patientId) || !isValidObjectId(doctorId) || !reason || !date) {
      res.status(400).json({
        error: {
          code: 'INVALID_APPOINTMENT_DATA',
          message: 'patientId, doctorId, date y reason son obligatorios y deben tener un formato válido.',
        },
      });
      return;
    }

    const appointmentData: AppointmentData = {
      patientId,
      doctorId,
      date,
      reason,
    };

    const appointment = await appointmentService.createAppointment(appointmentData);
    res.status(201).json({ data: { appointment } });
  } catch (error) {
    next(error);
  }
};

export const getAllAppointment = async (
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

    const appointments = await appointmentService.getAppointmentsByPatient(patientId);
    res.status(200).json({
      data: { appointments },
      meta: { total: appointments.length },
    });
  } catch (error) {
    next(error);
  }
};
