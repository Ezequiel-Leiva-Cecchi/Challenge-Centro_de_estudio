import express, { Application } from 'express'; 
import dotenv from 'dotenv'; 
import passport from 'passport'; 
import swaggerJsdoc from 'swagger-jsdoc'; 
import swaggerUi from 'swagger-ui-express'; 

import { PORT } from './config/config'; 
import mongooseLoader from './loaders/mongoose'; 
import expressLoader from './loaders/express'; 
import userRoutes from './routes/user.routes'; 
import appointmentRoutes from './routes/appointment.routes'; 
import studyRoutes from './routes/study.routes'; 
import { swaggerConfiguration } from './utils/swagger.config';
import passportConfig from './config/passport.config'; 

dotenv.config(); 

const app: Application = express(); 

expressLoader({ app }); // Inicializa Express 

mongooseLoader(); // Conecta a la base de datos MongoDB usando Mongoose

// Inicializa Passport y configura la estrategia JWT
passportConfig();
app.use(passport.initialize()); 

// Define las rutas de la API
app.use('/api/users', userRoutes); // Rutas relacionadas con los usuarios
app.use('/api/appointments', appointmentRoutes); // Rutas relacionadas con las citas
app.use('/api/studies', studyRoutes); // Rutas relacionadas con los estudios

// Configuración de Swagger para la documentación de la API
const specs = swaggerJsdoc(swaggerConfiguration); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); 

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); 
});
