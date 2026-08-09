import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import {
  getCurrentUser,
  loginUser,
  registerUser
} from '../services/auth.service.js';
import { AppError } from '../utils/app-error.js';

const registerSchema = z.object({
  name: z.string().trim().min(2, 'Имя должно содержать минимум 2 символа').max(60),
  email: z.string().email('Введите корректный email'),
  password: z
    .string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .regex(/[A-Za-z]/, 'Пароль должен содержать букву')
    .regex(/\d/, 'Пароль должен содержать цифру')
});

const loginSchema = z.object({
  email: z.string().email('Введите корректный email'),
  password: z.string().min(8, 'Некорректный пароль')
});

export async function registerController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const payload = registerSchema.parse(request.body);
    response.status(201).json(await registerUser(payload));
  } catch (error) {
    next(error);
  }
}

export async function loginController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const payload = loginSchema.parse(request.body);
    response.json(await loginUser(payload));
  } catch (error) {
    next(error);
  }
}

export async function meController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (!request.userId) {
      throw new AppError('Требуется авторизация', 401);
    }

    response.json(await getCurrentUser(request.userId));
  } catch (error) {
    next(error);
  }
}
