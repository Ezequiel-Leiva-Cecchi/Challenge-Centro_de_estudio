import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Función para obtener el token de almacenamiento local o algún otro mecanismo de almacenamiento
const getToken = () => {
  // Verificar si el token está disponible
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage.getItem('token');
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
