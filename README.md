# Proyecto de Gestión de Estudios y Citas Médicas

Este proyecto es una API RESTful para la gestión de estudios y citas médicas, utilizando Node.js, Express, MongoDB y otras tecnologías modernas.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Configuración](#configuración)
- [Rutas de la API](#rutas-de-la-api)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/Ezequiel-Leiva-Cecchi/Challenge-Centro_de_estudio
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd Challenge-Centro_de_estudio
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Configura las variables de entorno (ver [Configuración](#configuración)).
2. Inicia la aplicación:
    ```bash
    npm start
    ```
3. La aplicación estará disponible en `http://localhost:5000` por defecto.

## Configuración

El proyecto requiere varias variables de entorno para funcionar correctamente. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:

```env
PORT=5000
MONGODB_URL=Utilza-tu-conección-de-mongo-aca
JWT_SECRET=Aca-tu-clave-secreta-de-jsonwebtoken
