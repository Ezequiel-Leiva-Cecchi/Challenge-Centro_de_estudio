"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudies = exports.createStudy = void 0;
const studyService_1 = require("../../services/studyService");
const StudyService = new studyService_1.studyService();
const createStudy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { patientId, studyType, results, date } = req.body;
        if (!patientId || !studyType || !results || !date) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        const studyData = { patientId, studyType, results, date };
        const newStudy = yield StudyService.createStudy(studyData);
        return res.status(201).json(newStudy);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createStudy = createStudy;
const getAllStudies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patientId = req.params._id;
        const studies = yield StudyService.getAllStudies(patientId);
        return res.status(200).json(studies);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getAllStudies = getAllStudies;
