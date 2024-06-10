import axios from 'axios';
import { Request } from 'express';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Función para obtener el token de almacenamiento local o algún otro mecanismo de almacenamiento
const getToken = (req: Request) => {
  // Verificar si el token está disponible en las cookies de la solicitud
  if (req.cookies && req.cookies.token) {
    return req.cookies.token;
  }
  return null;
};


// Interceptor para agregar el token de autorización a cada solicitud
axiosInstance.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
