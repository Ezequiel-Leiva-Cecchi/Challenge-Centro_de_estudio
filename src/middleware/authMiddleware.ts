import { Request, Response, NextFunction } from 'express';
 
// Verificar si el usuario está autenticado
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next(); 
    } else {
        return res.status(401).json({ message: 'Unauthorized' }); 
    }
};
