import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/userService';
import { IUser } from '../types/UserTypes';
import { isValidEmail, toTrimmedString } from '../utils/validation';

const userService = new UserService();

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const body = (req.body ?? {}) as Record<string, unknown>;
    const street = (body.street ?? {}) as Record<string, unknown>;

    const name = toTrimmedString(body.name);
    const phone = toTrimmedString(body.phone);
    const email = toTrimmedString(body.email);
    const password = typeof body.password === 'string' ? body.password : '';
    const passwordConfirm = typeof body.passwordConfirm === 'string' ? body.passwordConfirm : '';
    const streetNumber = toTrimmedString(street.number);
    const postalCode = toTrimmedString(street.postalCode);

    if (
      !name ||
      !phone ||
      !isValidEmail(email) ||
      password.length < 8 ||
      !passwordConfirm ||
      !streetNumber ||
      !postalCode
    ) {
      res.status(400).json({
        error: {
          code: 'INVALID_REGISTRATION_DATA',
          message: 'Completá nombre, teléfono, email válido, contraseña de al menos 8 caracteres, confirmación y dirección.',
        },
      });
      return;
    }

    if (password !== passwordConfirm) {
      res.status(400).json({
        error: {
          code: 'PASSWORD_MISMATCH',
          message: 'Las contraseñas no coinciden.',
        },
      });
      return;
    }

    const userData: IUser = {
      name,
      phone,
      email,
      password,
      passwordConfirm,
      street: {
        number: streetNumber,
        postalCode,
        floor: toTrimmedString(street.floor) || undefined,
        apartment: toTrimmedString(street.apartment) || undefined,
      },
    };

    const user = await userService.signup(userData);
    res.status(201).json({
      message: 'Usuario registrado correctamente.',
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const body = (req.body ?? {}) as Record<string, unknown>;
    const email = toTrimmedString(body.email);
    const password = typeof body.password === 'string' ? body.password : '';

    if (!isValidEmail(email) || !password) {
      res.status(400).json({
        error: {
          code: 'INVALID_LOGIN_DATA',
          message: 'Ingresá un email válido y una contraseña.',
        },
      });
      return;
    }

    const result = await userService.login(email, password);
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};
