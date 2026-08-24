import { Router } from 'express';
import { login, signup } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/register', signup);
userRouter.post('/signup', signup); // Alias legado
userRouter.post('/login', login);

export default userRouter;
