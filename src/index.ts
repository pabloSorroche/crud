import express from 'express';

import userRouter from './interfaces/http/routes/userRoutes';

const app = express();
const port = process.env.PORT ?? '9001';

app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
