import jwt, { SignOptions } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

export const generateToken = (
  payload: object,
  expiresIn: SignOptions['expiresIn'] = '2h',
): string => jwt.sign(payload, JWT_SECRET, { expiresIn });

export const verifyToken = (token: string): string | jwt.JwtPayload =>
  jwt.verify(token, JWT_SECRET);
