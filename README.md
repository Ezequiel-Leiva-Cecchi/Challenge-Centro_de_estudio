# CentroMed API

API REST desarrollada con **Node.js, Express, TypeScript y MongoDB** para gestionar usuarios, turnos y estudios de un centro médico.

Esta versión moderniza el challenge original manteniendo compatibilidad con sus rutas principales, pero corrige problemas de filtrado, autenticación, manejo de errores y configuración para producción.

## Qué ofrece

- Registro e inicio de sesión con JWT.
- Contraseñas hasheadas con bcrypt y ocultas en las consultas normales.
- Creación y consulta de turnos por paciente.
- Creación y consulta de estudios por paciente.
- Validación de ObjectId, fechas, email y campos obligatorios.
- Respuestas de error consistentes.
- Swagger UI en `/api-docs`.
- Health check de API + MongoDB en `/health`.
- Helmet, CORS, compresión y logging HTTP.
- Inicialización segura: el servidor espera la conexión a Mongo antes de escuchar tráfico.
- Cierre ordenado ante `SIGTERM` y `SIGINT`.
- Preparado para CI y despliegue en Render.

## Stack

- Node.js 20+
- TypeScript
- Express
- MongoDB + Mongoose
- Passport JWT
- bcrypt
- Swagger / OpenAPI
- Helmet, CORS, Morgan y Compression

## Instalación

```bash
git clone https://github.com/Ezequiel-Leiva-Cecchi/Challenge-Centro_de_estudio.git
cd Challenge-Centro_de_estudio
npm install
```

Copiá `.envExample` a `.env` y completá las variables:

```env
PORT=5000
MONGODB_URL=mongodb+srv://usuario:password@cluster.mongodb.net/centromed
JWT_SECRET=una-clave-larga-y-segura
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

`DB_CONNECT` sigue siendo aceptada como alias legado de `MONGODB_URL`.

## Comandos

```bash
npm run dev        # desarrollo con nodemon + ts-node
npm run typecheck  # chequeo de TypeScript sin generar archivos
npm run build      # compila a /build
npm start          # ejecuta la versión compilada
npm test           # actualmente ejecuta el typecheck
```

## Rutas principales

### Sistema

| Método | Ruta | Auth | Descripción |
| --- | --- | --- | --- |
| GET | `/health` | No | Estado de API y MongoDB |
| GET | `/api` | No | Información básica de la API |
| GET | `/api-docs` | No | Documentación Swagger |

### Usuarios

| Método | Ruta | Auth | Descripción |
| --- | --- | --- | --- |
| POST | `/api/users/register` | No | Registrar usuario |
| POST | `/api/users/login` | No | Iniciar sesión y obtener JWT |

`POST /api/users/signup` se conserva como alias del endpoint de registro original.

### Turnos

| Método | Ruta | Auth | Descripción |
| --- | --- | --- | --- |
| POST | `/api/appointments` | JWT | Crear turno |
| GET | `/api/appointments/patient/:pId` | JWT | Turnos de un paciente |

Las rutas antiguas `/api/appointments/appointment` y `/api/appointments/appointment/:pId` siguen disponibles como aliases.

### Estudios

| Método | Ruta | Auth | Descripción |
| --- | --- | --- | --- |
| POST | `/api/studies` | JWT | Crear estudio |
| GET | `/api/studies/patient/:pId` | JWT | Estudios de un paciente |

Las rutas antiguas `/api/studies/study` y `/api/studies/study/:pId` siguen disponibles como aliases.

## Ejemplo de autenticación

Registro:

```json
{
  "name": "Juan Pérez",
  "phone": "+54 11 5555-5555",
  "email": "juan@example.com",
  "password": "clave-segura-123",
  "passwordConfirm": "clave-segura-123",
  "street": {
    "number": "1234",
    "postalCode": "C1234ABC",
    "floor": "4",
    "apartment": "B"
  }
}
```

Para las rutas protegidas enviá el token obtenido en login:

```text
Authorization: Bearer <token>
```

## Cambios importantes respecto del challenge original

- La consulta de turnos ahora filtra realmente por el `patientId` recibido.
- Los imports respetan mayúsculas/minúsculas y funcionan en Linux.
- `MONGODB_URL` y la documentación usan el mismo nombre de variable.
- Passport se inicializa una sola vez.
- Se reemplazó `body-parser` por los parsers incluidos en Express.
- Los errores de email duplicado y credenciales inválidas ya no son reemplazados por errores genéricos.
- `patientId` y `doctorId` se modelan como referencias MongoDB e incluyen índices.
- El servidor ya no empieza a aceptar requests antes de conectarse a la base.

## Calidad

El workflow de GitHub Actions ejecuta `npm ci`, `npm run typecheck` y `npm run build` en cada push o pull request hacia `main`.
