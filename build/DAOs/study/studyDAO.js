"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studyDAO = void 0;
const study_mongoose_1 = require("./study.mongoose");
let studyDAO;
const DAO_OPTION = process.env.DAO_OPTION || 'mongoose';
switch (DAO_OPTION) {
    case 'mongoose':
        exports.studyDAO = studyDAO = new study_mongoose_1.StudyMongoose();
        break;
    default:
        exports.studyDAO = studyDAO = new study_mongoose_1.StudyMongoose();
}
