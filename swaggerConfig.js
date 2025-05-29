import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API CRUD',
      version: '1.0.0',
      decription: 'Documentation for API CRUD with Express',
    },
    servers: [
      {
        url: 'http://miapp.local',
      },
    ],
  },
  apis: ['./src/contexts/crud/interfaces/http/routes/userRoutes.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
