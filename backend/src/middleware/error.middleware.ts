import { NextFunction, Request, Response } from 'express';
import { MulterError } from 'multer';
import { ZodError } from 'zod';
import { AppError } from '../utils/app-error.js';

export function notFoundMiddleware(
  _request: Request,
  _response: Response,
  next: NextFunction
): void {
  next(new AppError('Маршрут не найден', 404));
}

export function errorMiddleware(
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction
): void {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message });
    return;
  }

  if (error instanceof ZodError) {
    response.status(400).json({
      message: error.issues[0]?.message ?? 'Некорректные данные'
    });
    return;
  }

  if (error instanceof MulterError) {
    response.status(400).json({ message: 'Ошибка загрузки файла' });
    return;
  }

  response.status(500).json({ message: 'Внутренняя ошибка сервера' });
}
