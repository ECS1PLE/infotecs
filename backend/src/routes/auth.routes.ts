import { Router } from 'express';
import {
  loginController,
  meController,
  registerController
} from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

export const authRouter = Router();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/me', authMiddleware, meController);
