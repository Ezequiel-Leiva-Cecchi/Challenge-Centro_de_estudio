import { NextFunction, Request, RequestHandler, Response } from 'express';
import passport from 'passport';
import { UserRole } from '../types/UserTypes';
import { isValidObjectId, toTrimmedString } from '../utils/validation';

type AuthenticatedUser = Express.User & {
  _id?: unknown;
  role?: UserRole;
};

const getAuthenticatedUser = (req: Request): AuthenticatedUser | undefined =>
  req.user as AuthenticatedUser | undefined;

const isPrivileged = (role: UserRole): boolean => role === 'doctor' || role === 'admin';

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

export const requireRoles = (...allowedRoles: UserRole[]): RequestHandler =>
  (req, res, next): void => {
    const user = getAuthenticatedUser(req);
    const role = user?.role ?? 'patient';

    if (!user || !allowedRoles.includes(role)) {
      res.status(403).json({
        error: {
          code: 'FORBIDDEN',
          message: 'No tenés permisos para realizar esta acción.',
        },
      });
      return;
    }

    next();
  };

export const requirePatientParamAccess: RequestHandler = (req, res, next): void => {
  const patientId = req.params.pId;
  if (!isValidObjectId(patientId)) {
    next();
    return;
  }

  const user = getAuthenticatedUser(req);
  const role = user?.role ?? 'patient';
  const userId = user?._id ? String(user._id) : '';

  if (!user || (!isPrivileged(role) && userId !== patientId)) {
    res.status(403).json({
      error: {
        code: 'PATIENT_DATA_FORBIDDEN',
        message: 'No tenés permisos para acceder a los datos de este paciente.',
      },
    });
    return;
  }

  next();
};

export const requirePatientBodyAccess: RequestHandler = (req, res, next): void => {
  const body = (req.body ?? {}) as Record<string, unknown>;
  const patientId = toTrimmedString(body.patientId);
  if (!isValidObjectId(patientId)) {
    next();
    return;
  }

  const user = getAuthenticatedUser(req);
  const role = user?.role ?? 'patient';
  const userId = user?._id ? String(user._id) : '';

  if (!user || (!isPrivileged(role) && userId !== patientId)) {
    res.status(403).json({
      error: {
        code: 'PATIENT_DATA_FORBIDDEN',
        message: 'No tenés permisos para operar sobre otro paciente.',
      },
    });
    return;
  }

  next();
};
