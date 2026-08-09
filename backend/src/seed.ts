import bcrypt from 'bcryptjs';
import { prisma } from './lib/prisma.js';

async function seed(): Promise<void> {
  const passwordHash = await bcrypt.hash('Demo12345', 12);

  const user = await prisma.user.upsert({
    where: {
      email: 'demo@bar21.local'
    },
    update: {
      name: 'Demo Bartender',
      passwordHash
    },
    create: {
      email: 'demo@bar21.local',
      name: 'Demo Bartender',
      passwordHash
    }
  });

  const existingCocktail = await prisma.cocktail.findFirst({
    where: {
      userId: user.id,
      name: 'Neon Gimlet'
    }
  });

  if (!existingCocktail) {
    await prisma.cocktail.create({
      data: {
        userId: user.id,
        name: 'Neon Gimlet',
        description:
          'Чистый, цитрусовый и холодный гимлет с яркой кислотностью и минималистичной подачей.',
        imageUrl: null,
        steps: {
          create: [
            {
              order: 1,
              description:
                'Охладите бокал и наполните шейкер крупным льдом.',
              imageUrl: null
            },
            {
              order: 2,
              description:
                'Добавьте джин, кордиал лайма и свежий сок. Интенсивно встряхивайте 12–15 секунд.',
              imageUrl: null
            },
            {
              order: 3,
              description:
                'Сделайте двойную фильтрацию в охлажденный бокал и украсьте тонкой цедрой лайма.',
              imageUrl: null
            }
          ]
        }
      }
    });
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: unknown) => {
    await prisma.$disconnect();
    throw error;
  });
