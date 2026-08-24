import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

export const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  passport.authenticate(
    'jwt',
    { session: false },
    (error: unknown, user: Express.User | false | null) => {
      if (error || !user) {
        res.status(401).json({
          error: {
            code: 'UNAUTHORIZED',
            message: 'Necesitás un token válido para acceder a este recurso.',
          },
        });
        return;
      }

      req.user = user;
      next();
    },
  )(req, res, next);
};
