import Study from '../../models/studyModel';
import { StudyData } from '../../../types/studyTypes';

export class StudyMongoose {
  async createStudy(studyData: StudyData) {
    const study = await Study.create(studyData);
    return study.toObject();
  }

  async getAllStudies(patientId: string) {
    return Study.find({ patientId })
      .sort({ date: -1 })
      .lean();
  }
}
