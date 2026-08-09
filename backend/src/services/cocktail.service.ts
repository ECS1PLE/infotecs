import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.js';
import { AppError } from '../utils/app-error.js';

export interface CocktailInput {
  name: string;
  description: string;
  imageUrl: string | null;
  steps: Array<{
    description: string;
    imageUrl: string | null;
  }>;
}

const cocktailInclude = {
  steps: {
    orderBy: {
      order: 'asc' as const
    }
  }
} satisfies Prisma.CocktailInclude;

function toSummaryDto(cocktail: {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}) {
  return {
    id: cocktail.id,
    name: cocktail.name,
    description: cocktail.description,
    imageUrl: cocktail.imageUrl,
    createdAt: cocktail.createdAt.toISOString(),
    updatedAt: cocktail.updatedAt.toISOString()
  };
}

function toCocktailDto(
  cocktail: Prisma.CocktailGetPayload<{ include: typeof cocktailInclude }>
) {
  return {
    ...toSummaryDto(cocktail),
    steps: cocktail.steps.map((step) => ({
      id: step.id,
      order: step.order,
      description: step.description,
      imageUrl: step.imageUrl
    }))
  };
}

export async function listCocktails(userId: string) {
  const cocktails = await prisma.cocktail.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });

  return cocktails.map(toSummaryDto);
}

export async function getCocktail(userId: string, cocktailId: string) {
  const cocktail = await prisma.cocktail.findFirst({
    where: {
      id: cocktailId,
      userId
    },
    include: cocktailInclude
  });

  if (!cocktail) {
    throw new AppError('Рецепт не найден', 404);
  }

  return toCocktailDto(cocktail);
}

export async function createCocktail(
  userId: string,
  input: CocktailInput
) {
  const cocktail = await prisma.cocktail.create({
    data: {
      userId,
      name: input.name.trim(),
      description: input.description.trim(),
      imageUrl: input.imageUrl,
      steps: {
        create: input.steps.map((step, index) => ({
          order: index + 1,
          description: step.description.trim(),
          imageUrl: step.imageUrl
        }))
      }
    },
    include: cocktailInclude
  });

  return toCocktailDto(cocktail);
}

export async function updateCocktail(
  userId: string,
  cocktailId: string,
  input: CocktailInput
) {
  await getCocktail(userId, cocktailId);

  const cocktail = await prisma.$transaction(async (transaction) => {
    await transaction.cocktailStep.deleteMany({
      where: { cocktailId }
    });

    return transaction.cocktail.update({
      where: { id: cocktailId },
      data: {
        name: input.name.trim(),
        description: input.description.trim(),
        imageUrl: input.imageUrl,
        steps: {
          create: input.steps.map((step, index) => ({
            order: index + 1,
            description: step.description.trim(),
            imageUrl: step.imageUrl
          }))
        }
      },
      include: cocktailInclude
    });
  });

  return toCocktailDto(cocktail);
}

export async function deleteCocktail(
  userId: string,
  cocktailId: string
): Promise<void> {
  await getCocktail(userId, cocktailId);

  await prisma.cocktail.delete({
    where: { id: cocktailId }
  });
}
