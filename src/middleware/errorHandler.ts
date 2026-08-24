import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export class ApiError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly code?: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    error: {
      code: 'NOT_FOUND',
      message: `No existe la ruta ${req.method} ${req.originalUrl}`,
    },
  });
};

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({
      error: {
        code: error.code ?? 'REQUEST_ERROR',
        message: error.message,
      },
    });
    return;
  }

  if (error instanceof mongoose.Error.ValidationError || error instanceof mongoose.Error.CastError) {
    res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Los datos enviados no tienen un formato válido.',
      },
    });
    return;
  }

  const mongoError = error as { code?: number };
  if (mongoError?.code === 11000) {
    res.status(409).json({
      error: {
        code: 'DUPLICATE_RESOURCE',
        message: 'Ya existe un recurso con esos datos únicos.',
      },
    });
    return;
  }

  console.error('Unhandled error:', error);
  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Ocurrió un error interno en el servidor.',
    },
  });
};
