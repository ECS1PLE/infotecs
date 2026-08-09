import { randomUUID } from 'node:crypto';
import path from 'node:path';
import multer from 'multer';
import { AppError } from '../utils/app-error.js';

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (_request, file, callback) => {
    const extension = path.extname(file.originalname).toLowerCase();
    callback(null, `${randomUUID()}${extension}`);
  }
});

const allowedMimeTypes = new Set([
  'image/png',
  'image/jpeg',
  'image/webp'
]);

export const upload = multer({
  storage,
  limits: {
    fileSize: 8 * 1024 * 1024
  },
  fileFilter: (_request, file, callback) => {
    if (!allowedMimeTypes.has(file.mimetype)) {
      callback(new AppError('Разрешены только PNG, JPG и WEBP', 400));
      return;
    }

    callback(null, true);
  }
});
