import bcrypt from 'bcrypt';

// Función asíncrona para hashear una contraseña
export const hashPassword = async (password: string) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};


// Función asíncrona para comparar una contraseña en texto plano con una contraseña hasheada
export const comparePassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
};