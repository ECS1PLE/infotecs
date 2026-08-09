import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import {
  createCocktail,
  deleteCocktail,
  getCocktail,
  listCocktails,
  updateCocktail
} from '../services/cocktail.service.js';
import { AppError } from '../utils/app-error.js';

const imageUrlSchema = z.string().startsWith('/uploads/').nullable();

const cocktailSchema = z.object({
  name: z.string().trim().min(1, 'Укажите название').max(100),
  description: z.string().trim().min(1, 'Добавьте описание').max(1200),
  imageUrl: imageUrlSchema,
  steps: z
    .array(
      z.object({
        description: z
          .string()
          .trim()
          .min(1, 'Опишите шаг приготовления')
          .max(800),
        imageUrl: imageUrlSchema
      })
    )
    .min(1, 'Добавьте хотя бы один шаг')
    .max(30)
});

function requireUserId(request: Request): string {
  if (!request.userId) {
    throw new AppError('Требуется авторизация', 401);
  }

  return request.userId;
}

export async function listCocktailsController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    response.json(await listCocktails(requireUserId(request)));
  } catch (error) {
    next(error);
  }
}

export async function getCocktailController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    response.json(
      await getCocktail(requireUserId(request), request.params['id'] ?? '')
    );
  } catch (error) {
    next(error);
  }
}

export async function createCocktailController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const payload = cocktailSchema.parse(request.body);
    response
      .status(201)
      .json(await createCocktail(requireUserId(request), payload));
  } catch (error) {
    next(error);
  }
}

export async function updateCocktailController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    const payload = cocktailSchema.parse(request.body);
    response.json(
      await updateCocktail(
        requireUserId(request),
        request.params['id'] ?? '',
        payload
      )
    );
  } catch (error) {
    next(error);
  }
}

export async function deleteCocktailController(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    await deleteCocktail(
      requireUserId(request),
      request.params['id'] ?? ''
    );
    response.status(204).send();
  } catch (error) {
    next(error);
  }
}
