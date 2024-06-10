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
exports.AppointmentMongoose = void 0;
const appointmentModel_1 = __importDefault(require("../../models/appointmentModel"));
class AppointmentMongoose {
    create(appointmentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const appointment = new appointmentModel_1.default(appointmentData);
            yield appointment.save();
            return appointment.toObject();
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return appointmentModel_1.default.find().lean();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointmentModel_1.default.findById(id).lean();
        });
    }
    update(id, appointmentData) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointmentModel_1.default.findByIdAndUpdate(id, appointmentData, { new: true }).lean();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return appointmentModel_1.default.findByIdAndDelete(id).lean();
        });
    }
}
exports.AppointmentMongoose = AppointmentMongoose;
