export const swaggerConfiguration = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Medical Study Center Management System',
            version: '1.0.0',
            description: 'API documentation for the Medical Study Center Management System',
        },
        servers: [
            {
                url: "http://localhost:5000/api",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/docs/*.yaml']
};
