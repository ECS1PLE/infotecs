import jwt from 'jsonwebtoken';
import { config } from '../config.js';

interface TokenPayload {
  sub: string;
}

export function signAccessToken(userId: string): string {
  return jwt.sign({}, config.JWT_SECRET, {
    subject: userId,
    expiresIn: '7d'
  });
}

export function verifyAccessToken(token: string): TokenPayload {
  const payload = jwt.verify(token, config.JWT_SECRET);

  if (typeof payload === 'string' || !payload.sub) {
    throw new Error('Invalid token');
  }

  return {
    sub: payload.sub
  };
}
