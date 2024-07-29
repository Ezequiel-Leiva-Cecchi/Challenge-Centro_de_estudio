import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patientId: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
}, { timestamps: true });

const appointmentModel = mongoose.model('Appointment', appointmentSchema);

export default appointmentModel;
