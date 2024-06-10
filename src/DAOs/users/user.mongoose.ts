import { IUser } from "../../types/UserTypes";
import userModel from "../../models/usersModel";

// Clase para interactuar con la base de datos MongoDB usando Mongoose
export class userMongoose {
    // Método para crear un nuevo usuario
    async createUser(user: IUser) {
        return await userModel.create(user);
    }

    // Método para obtener un usuario por su email
    async getUserByEmail(email: string) {
        return await userModel.findOne({ email });
    }
}
