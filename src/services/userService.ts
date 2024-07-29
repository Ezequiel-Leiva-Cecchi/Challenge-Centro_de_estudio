import { IUser } from "../types/userTypes";
import { userDAO } from "../api/DAOs/users/userDAO";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { generateToken } from "../utils/JWT";

export class UserService {
    // Método para registrar un nuevo usuario
    async signup(user: IUser) {
        try {
            // Primero verifica si el usuario ya existe en la base de datos local
            const existingUser = await userDAO.getUserByEmail(user.email);
            if (existingUser) {
                throw new Error("Email already exists");
            }

            // Hashea la contraseña antes de enviar la solicitud
            user.password = await hashPassword(user.password);

            // Guarda el usuario en la base de datos local usando el DAO
            const createdUser = await userDAO.createUser(user);

            // Retorna tanto la respuesta de Axios como el usuario creado localmente
            return createdUser;
        } catch (error) {
            console.error(error);
            throw new Error("Error creating user");
        }
    }

    // Método para iniciar sesión de usuario
    async login(email: string, password: string) {
        try {
            // Busca al usuario por su email en la base de datos
            const user = await userDAO.getUserByEmail(email);
            if (!user) {
                throw new Error("Invalid email or password");
            }

            // Verifica la contraseña usando bcrypt
            const isPasswordValid = await comparePassword(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid email or password");
            }

            // Genera un token JWT
            const generatedToken = generateToken({ userId: user._id });

            // Retorna el token JWT y los datos del usuario autenticado
            return { token: generatedToken, user };
        } catch (error) {
            console.error(error);
            throw new Error("Error authenticating user");
        }
    }
}
