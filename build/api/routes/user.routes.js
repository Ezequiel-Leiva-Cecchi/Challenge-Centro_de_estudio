"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
// POST /api/user- Registro de usuario 
userRouter.post('/signup', user_controller_1.signup);
// POST /api/user- Incio de sessión
userRouter.post('/login', user_controller_1.login);
exports.default = userRouter;
