import { Router } from 'express';
import { signup, login } from '../controllers/user.controller';

const userRouter = Router();

// POST /api/user- Registro de usuario 
userRouter.post('/signup', signup);

// POST /api/user- Incio de sessión
userRouter.post('/login', login);

export default userRouter;
