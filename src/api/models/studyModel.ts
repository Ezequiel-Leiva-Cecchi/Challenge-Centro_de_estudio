import { Schema, model } from 'mongoose';

const studySchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    studyType: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    results: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },
    date: {
      type: Date,
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

studySchema.index({ patientId: 1, date: -1 });

const Study = model('Study', studySchema);
export default Study;
