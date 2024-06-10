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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studyService = void 0;
const studyDAO_1 = require("../DAOs/study/studyDAO");
const axios_config_1 = __importDefault(require("../config/axios.config"));
class studyService {
    createStudy(studyData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStudy = yield studyDAO_1.studyDAO.createStudy(studyData);
            const response = yield axios_config_1.default.post('/study', newStudy);
            console.log('Response from external study service:', response.data);
            return newStudy;
        });
    }
    getAllStudies(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const studies = yield studyDAO_1.studyDAO.getAllStudies(patientId);
            const response = yield axios_config_1.default.get(`/study/${patientId}`);
            console.log('Response from external study service:', response.data);
            return studies;
        });
    }
}
exports.studyService = studyService;
