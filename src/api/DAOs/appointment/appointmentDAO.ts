import { AppointmentMongoose } from './appointment.mongoose';

let appointmentDAO: AppointmentMongoose;

const DAO_OPTION = process.env.DAO_OPTION || 'mongoose';

switch (DAO_OPTION) {
    case 'mongoose':
        appointmentDAO = new AppointmentMongoose();
        break;
    default:
        appointmentDAO = new AppointmentMongoose();
}

export { appointmentDAO };