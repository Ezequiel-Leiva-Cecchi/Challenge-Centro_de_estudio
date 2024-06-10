import bcrypt from 'bcrypt';

// Función asíncrona para hashear (encriptar) una contraseña
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10; 
    return await bcrypt.hash(password, saltRounds);
};

// Función asíncrona para comparar una contraseña en texto plano con una contraseña hasheada
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};