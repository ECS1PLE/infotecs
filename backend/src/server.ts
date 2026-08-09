import fs from 'node:fs';
import { app } from './app.js';
import { config } from './config.js';
import { prisma } from './lib/prisma.js';

fs.mkdirSync('uploads', { recursive: true });

const server = app.listen(config.PORT, () => {
  process.stdout.write(`BAR/21 API: http://localhost:${config.PORT}\n`);
});

async function shutdown(): Promise<void> {
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on('SIGINT', () => {
  void shutdown();
});

process.on('SIGTERM', () => {
  void shutdown();
});
