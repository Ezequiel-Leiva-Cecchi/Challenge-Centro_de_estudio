"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
// Verificar si el usuario está autenticado
const requireAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};
exports.requireAuth = requireAuth;
