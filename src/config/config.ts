import dotenv from 'dotenv';

dotenv.config();

const requiredEnv = (name: string, fallbackName?: string): string => {
  const value = process.env[name] ?? (fallbackName ? process.env[fallbackName] : undefined);
  if (!value) {
    const alternatives = fallbackName ? ` (o ${fallbackName})` : '';
    throw new Error(`La variable de entorno ${name}${alternatives} es obligatoria.`);
  }
  return value;
};

const parsedPort = Number.parseInt(process.env.PORT ?? '5000', 10);
const renderHostname = process.env.RENDER_EXTERNAL_HOSTNAME;

export const PORT = Number.isNaN(parsedPort) ? 5000 : parsedPort;
export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const JWT_SECRET = requiredEnv('JWT_SECRET');
export const MONGODB_URL = requiredEnv('MONGODB_URL', 'DB_CONNECT');
export const CORS_ORIGIN = process.env.CORS_ORIGIN ?? '*';
export const PUBLIC_URL =
  process.env.PUBLIC_URL ??
  (renderHostname ? `https://${renderHostname}` : `http://localhost:${PORT}`);
