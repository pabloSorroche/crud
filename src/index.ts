import express from 'express';
import swaggerUi from 'swagger-ui-express';

import userRouter from './contexts/crud/interfaces/http/routes/userRoutes';

import { swaggerSpec } from '../swaggerConfig';

const app = express();
const port = process.env.PORT ?? '3000';

app.use(express.json());

app.use('/users', userRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
