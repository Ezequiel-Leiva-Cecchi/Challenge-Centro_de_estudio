import { PUBLIC_URL } from '../config/config';

export const swaggerConfiguration = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'CentroMed API',
      version: '2.0.0',
      description: 'API REST para gestionar usuarios, turnos y estudios de un centro médico.',
    },
    servers: [{ url: PUBLIC_URL }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./docs/documentacion.yaml'],
};
