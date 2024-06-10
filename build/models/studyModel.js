"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studySchema = new mongoose_1.Schema({
    patientId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
const Study = (0, mongoose_1.model)('Study', studySchema);
exports.default = Study;
