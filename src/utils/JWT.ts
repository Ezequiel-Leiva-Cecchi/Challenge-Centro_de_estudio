import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

const secret = JWT_SECRET as string;  
if (!secret) {
    throw new Error('JWT_SECRET environment variable is not set');  
}
// Función para generar un token JWT
export const generateToken = (payload: object, expiresIn: string = '1h'): string => {
    return jwt.sign(payload, secret, { expiresIn });  
};

// Función para verificar un token JWT
export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, secret);  
    } catch (error) {
        throw new Error('Invalid token');  
    }
};
