import { IUser } from '../types/UserTypes';
import { userDAO } from '../api/DAOs/users/userDAO';
import { hashPassword, comparePassword } from '../utils/bcrypt';
import { generateToken } from '../utils/JWT';
import { ApiError } from '../middleware/errorHandler';
import { normalizeEmail } from '../utils/validation';

export class UserService {
  async signup(user: IUser) {
    const email = normalizeEmail(user.email);
    const existingUser = await userDAO.getUserByEmail(email);

    if (existingUser) {
      throw new ApiError(409, 'El email ya está registrado.', 'EMAIL_IN_USE');
    }

    if (user.passwordConfirm && user.password !== user.passwordConfirm) {
      throw new ApiError(400, 'Las contraseñas no coinciden.', 'PASSWORD_MISMATCH');
    }

    const hashedPassword = await hashPassword(user.password);
    const userToPersist: IUser = {
      ...user,
      email,
      password: hashedPassword,
    };
    delete userToPersist.passwordConfirm;

    const createdUser = await userDAO.createUser(userToPersist);
    const safeUser = createdUser.toObject() as Record<string, unknown>;
    delete safeUser.password;

    return safeUser;
  }

  async login(email: string, password: string) {
    const normalizedEmail = normalizeEmail(email);
    const user = await userDAO.getUserByEmail(normalizedEmail, true);

    if (!user || !user.password) {
      throw new ApiError(401, 'Email o contraseña incorrectos.', 'INVALID_CREDENTIALS');
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new ApiError(401, 'Email o contraseña incorrectos.', 'INVALID_CREDENTIALS');
    }

    const token = generateToken({ userId: String(user._id) });
    const safeUser = user.toObject() as Record<string, unknown>;
    delete safeUser.password;

    return { token, user: safeUser };
  }
}
