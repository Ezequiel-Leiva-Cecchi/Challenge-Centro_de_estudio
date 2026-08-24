import appointmentModel from '../../models/appointmentModel';
import { AppointmentData } from '../../../types/appointmentTypes';

export class AppointmentMongoose {
  async create(appointmentData: AppointmentData) {
    const appointment = await appointmentModel.create(appointmentData);
    return appointment.toObject();
  }

  async getByPatientId(patientId: string) {
    return appointmentModel
      .find({ patientId })
      .sort({ date: -1 })
      .lean();
  }
}
