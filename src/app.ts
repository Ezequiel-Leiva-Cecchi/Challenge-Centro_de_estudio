import express, { Application } from 'express';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { PORT } from './config/config';  
import mongooseLoader from './loaders/mongoose';  
import expressLoader from './loaders/express';  
import userRoutes from './api/routes/user.routes';  
import appointmentRoutes from './api/routes/appointment.routes';  
import studyRoutes from './api/routes/study.routes';  
import { swaggerConfiguration } from './utils/swagger.config';  

dotenv.config();  

const app: Application = express();  

expressLoader({ app });  // Inicializa express

mongooseLoader();  // Conecta a la base de datos MongoDB

// Define las rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/studies', studyRoutes);

// Configuración de Swagger
const specs = swaggerJsdoc(swaggerConfiguration);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));  

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
