import express, { Application } from 'express';
import mongoose from 'mongoose';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { PORT } from './config/config';
import expressLoader from './loaders/express';
import mongooseLoader, { disconnectMongoose } from './loaders/mongoose';
import userRoutes from './routes/user.routes';
import appointmentRoutes from './routes/appointment.routes';
import studyRoutes from './routes/study.routes';
import { swaggerConfiguration } from './utils/swagger.config';
import { landingPage, swaggerCustomCss } from './utils/docsTheme';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

const app: Application = express();
expressLoader({ app });

const specs = swaggerJsdoc(swaggerConfiguration);

app.get('/', (_req, res) => {
  res.removeHeader('Content-Security-Policy');
  res.status(200).type('html').send(landingPage);
});

app.get('/health', (_req, res) => {
  const databaseConnected = mongoose.connection.readyState === 1;
  res.status(databaseConnected ? 200 : 503).json({
    status: databaseConnected ? 'ok' : 'degraded',
    service: 'centromed-api',
    database: databaseConnected ? 'connected' : 'disconnected',
    uptime: Math.round(process.uptime()),
  });
});

app.get('/api', (_req, res) => {
  res.status(200).json({
    name: 'CentroMed API',
    version: '2.0.0',
    documentation: '/api-docs',
    health: '/health',
  });
});

app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/studies', studyRoutes);

app.use(
  '/api-docs',
  (_req, res, next) => {
    res.removeHeader('Content-Security-Policy');
    next();
  },
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    customSiteTitle: 'CentroMed API · Documentación',
    customCss: swaggerCustomCss,
  }),
);

app.use(notFoundHandler);
app.use(errorHandler);

export const startServer = async () => {
  await mongooseLoader();

  const server = app.listen(PORT, () => {
    console.log(`CentroMed API disponible en http://localhost:${PORT}`);
  });

  const shutdown = (signal: string): void => {
    console.log(`${signal} recibido. Cerrando servidor...`);
    server.close(() => {
      void disconnectMongoose().finally(() => process.exit(0));
    });
  };

  process.once('SIGTERM', () => shutdown('SIGTERM'));
  process.once('SIGINT', () => shutdown('SIGINT'));

  return server;
};

if (require.main === module) {
  startServer().catch((error: unknown) => {
    console.error('No se pudo iniciar CentroMed API:', error);
    process.exit(1);
  });
}

export default app;
