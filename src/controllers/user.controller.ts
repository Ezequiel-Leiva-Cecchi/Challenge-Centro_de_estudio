import { UserService } from '../services/userService';
import { Request, Response } from "express";

const userService = new UserService();

// Controlador para el registro de usuarios
export const signup = async (req: Request, res: Response) => {
    const userData = req.body;
    try {
        // Llama al servicio para registrar un nuevo usuario
        await userService.signup(userData);
        res.status(201).json({message:"User register successfully"});
    } catch (error) {
        console.error(error);
        if (error === "Email already exists") {
            res.status(400).json({ message: "Email already in use" });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

// Controlador para el inicio de sesión de usuarios
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        // Llama al servicio para iniciar sesión con el email y contraseña proporcionados
        const result = await userService.login(email, password);
        res.json(result); // Devuelve el token de acceso generado
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: error }); 
    }
};
