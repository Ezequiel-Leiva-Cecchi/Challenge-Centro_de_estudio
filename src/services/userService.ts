import { IUser } from "../types/UserTypes";
import { userDAO } from "../DAOs/users/userDAO";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/JWT";
import axiosInstance from '../config/axios.config';

export class UserService {
    // Método para registrar un nuevo usuario
    async signup(user: IUser) {
        try {
            user.password = await hashPassword(user.password);
            const createdUser = await userDAO.createUser(user);
            const response = await axiosInstance.post('/users/signup');
            console.log(response);

            return createdUser;
        } catch (error) {
            console.error(error);
            throw new Error("Error creating user");
        }
    }

    // Método para iniciar sesión de usuario
    async login(email: string, password: string) {
        try {
            const user = await userDAO.getUserByEmail(email);

            if (!user) {
                throw new Error("Invalid email or password");
            }
            const isPasswordValid = await comparePassword(password, user.password);

            if (!isPasswordValid) {
                throw new Error("Invalid email or password");
            }
            const token = generateToken({ userId: user._id });
            const response = await axiosInstance.post('/users/login', { email, token });
            console.log(response);
            return { token };
        } catch (error) {
            console.error(error);
            throw new Error("Error authenticating user");
        }
    }
}
