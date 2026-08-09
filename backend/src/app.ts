import path from 'node:path';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { config } from './config.js';
import { authMiddleware } from './middleware/auth.middleware.js';
import {
  errorMiddleware,
  notFoundMiddleware
} from './middleware/error.middleware.js';
import { authRouter } from './routes/auth.routes.js';
import { cocktailRouter } from './routes/cocktail.routes.js';
import { uploadRouter } from './routes/upload.routes.js';

export const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: 'cross-origin'
    }
  })
);
app.use(
  cors({
    origin: config.CLIENT_ORIGIN
  })
);
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(path.resolve('uploads')));

app.get('/', (_request, response) => {
  response.json({
    service: 'BAR/21 API',
    status: 'ok',
    frontend: 'http://localhost:4200',
    health: '/api/health'
  });
});

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/cocktails', authMiddleware, cocktailRouter);
app.use('/api/uploads', authMiddleware, uploadRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
