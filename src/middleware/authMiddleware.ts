import { Request, Response, NextFunction } from 'express';
import passport from 'passport'; 
import { IUser } from '../types/userTypes'; 

// Middleware de autenticación que verifica si el usuario está autenticado usando JWT
export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  // Llama a la función de autenticación de Passport con la estrategia 'jwt'
  passport.authenticate('jwt', { session: false }, (error: Error, user: IUser) => {
    if (error || !user) {
      console.error('Authentication Error:', error); 
      console.log('No user found'); 
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;
    // Llama a la siguiente función en la cadena de middleware
    return next();
  })(req, res, next); 
};
