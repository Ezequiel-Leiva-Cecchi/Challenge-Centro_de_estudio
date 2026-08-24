import { AppointmentData } from '../types/appointmentTypes';
import { appointmentDAO } from '../api/DAOs/appointment/appointmentDAO';

export class AppointmentService {
  async createAppointment(appointmentData: AppointmentData) {
    return appointmentDAO.create(appointmentData);
  }

  async getAppointmentsByPatient(patientId: string) {
    return appointmentDAO.getByPatientId(patientId);
  }
}
