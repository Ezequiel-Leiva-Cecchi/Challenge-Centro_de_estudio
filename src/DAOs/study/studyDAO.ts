import { StudyMongoose } from './study.mongoose';

let studyDAO: StudyMongoose;  

const DAO_OPTION = process.env.DAO_OPTION || 'mongoose';  

switch (DAO_OPTION) {
    case 'mongoose':
        studyDAO = new StudyMongoose();
        break;
    default:
        studyDAO = new StudyMongoose();
}

export { studyDAO };  