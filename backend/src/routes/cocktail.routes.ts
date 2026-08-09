import { Router } from 'express';
import {
  createCocktailController,
  deleteCocktailController,
  getCocktailController,
  listCocktailsController,
  updateCocktailController
} from '../controllers/cocktail.controller.js';

export const cocktailRouter = Router();

cocktailRouter.get('/', listCocktailsController);
cocktailRouter.get('/:id', getCocktailController);
cocktailRouter.post('/', createCocktailController);
cocktailRouter.put('/:id', updateCocktailController);
cocktailRouter.delete('/:id', deleteCocktailController);
