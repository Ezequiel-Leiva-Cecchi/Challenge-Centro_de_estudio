import { StudyData } from '../types/studyTypes';
import { studyDAO } from '../api/DAOs/study/studyDAO';

export class StudyService {
  async createStudy(studyData: StudyData) {
    return studyDAO.createStudy(studyData);
  }

  async getStudiesByPatient(patientId: string) {
    return studyDAO.getAllStudies(patientId);
  }
}
