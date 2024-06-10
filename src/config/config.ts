import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGODB_URL = process.env.DB_CONNECT;
export const PORT = process.env.PORT;