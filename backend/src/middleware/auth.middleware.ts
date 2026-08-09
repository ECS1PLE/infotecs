import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/app-error.js';
import { verifyAccessToken } from '../utils/jwt.js';

export function authMiddleware(
  request: Request,
  _response: Response,
  next: NextFunction
): void {
  const authorization = request.header('authorization');

  if (!authorization?.startsWith('Bearer ')) {
    next(new AppError('Требуется авторизация', 401));
    return;
  }

  const token = authorization.slice(7);

  try {
    request.userId = verifyAccessToken(token).sub;
    next();
  } catch {
    next(new AppError('Сессия истекла. Войдите снова', 401));
  }
}
