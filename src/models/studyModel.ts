import { Schema, model } from 'mongoose';

const studySchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    studyType: {
        type: String,
        required: true
    },
    results: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Study = model('Study', studySchema);

export default Study;