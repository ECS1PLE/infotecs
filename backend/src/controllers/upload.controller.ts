import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/app-error.js';

export function uploadController(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  try {
    if (!request.file) {
      throw new AppError('Файл не выбран', 400);
    }

    response.status(201).json({
      url: `/uploads/${request.file.filename}`
    });
  } catch (error) {
    next(error);
  }
}
