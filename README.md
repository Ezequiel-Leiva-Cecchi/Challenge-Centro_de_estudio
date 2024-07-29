# Proyecto de Gestión de Estudios y Citas Médicas

Este proyecto es una API RESTful para la gestión de estudios y citas médicas, utilizando Node.js, Express, MongoDB y otras tecnologías modernas.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Configuración](#configuración)
- [Rutas de la API](#rutas-de-la-api)
- [Estructura del Proyecto](#estructura-del-proyecto)

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
PORT=***
MONGODB_URL=***
JWT_SECRET=***
```

## Rutas de la API
A continuación se describen las principales rutas de la API:

Usuarios
`POST /api/users/register` - Registro de un nuevo usuario.

`POST /api/users/login` - Inicio de sesión de un usuario.

Citas Médicas
`POST /api/appointments/appointment` - Crear una nueva cita médica.

`GET /api/appointments/Appointment/:pId` - Obtener todas las citas médicas para un paciente.

Estudios Médicos
`POST /api/studies/study` - Crear un nuevo estudio médico.

`GET /api/studies/study/:pId` - Obtener todos los estudios médicos para un paciente

## Estructura del proyecto

|src
|__api
|   |__DAOs
|   |   |___appointment
|   |  |   |__appointment.mongoose.ts
|   |   |   |__appointmentDAO.ts
|   |   |
|   |   |___study
|   |   |   |__study.mongoose.ts
|   |   |   |__studyDAO.ts
|   |   |___users
|   |       |__user.mongoose.ts
|   |       |__userDAO.ts
|   |__models
|      |__appointmentModel.ts     
|      |__studyModel.ts
|      |__userModel.ts
|
|__config
|   |__config.ts
|   |__passport.config.ts
|
|__controllers
|  |__appointment.controller.ts
|  |__study.controller.ts
|  |__user.controller.ts
|
|__loaders
|  |__express.ts
|  |__mongoose.ts
|  
|__middleware
|  |__authMiddleware.ts
| 
|__routes
|  |__appointment.routes.ts
|  |__study.routes.ts
|  |__user.routes.ts
|
|__services
|  |__appointmentService.ts
|  |__studyService.ts
|  |__userService.ts
|  
|__types
|  |__appointmentTypes.ts
|  |__jwtTypes.ts
|  |__studyTypes.ts
|  |__userTypes.ts 
| 
|__utils
|  |__bcrypt.ts
|  |__JWT.ts
|  |__swagger.config.ts
|
|__app.ts