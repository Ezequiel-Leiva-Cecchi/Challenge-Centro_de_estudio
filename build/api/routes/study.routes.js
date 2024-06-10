"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/studyRoutes.ts
const express_1 = require("express");
const study_controller_1 = require("../controllers/study.controller");
const authMiddleware_1 = require("../middleware/authMiddleware");
const studyRouter = (0, express_1.Router)();
studyRouter.post('/', authMiddleware_1.requireAuth, study_controller_1.createStudy);
studyRouter.get('/', authMiddleware_1.requireAuth, study_controller_1.getAllStudies);
exports.default = studyRouter;
