"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Función para obtener el token de almacenamiento local o algún otro mecanismo de almacenamiento
const getToken = () => {
    return localStorage.getItem('token');
};
const axiosInstance = axios_1.default.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
// Interceptor para agregar el token de autorización a cada solicitud
axiosInstance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
exports.default = axiosInstance;
