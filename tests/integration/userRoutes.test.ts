import express from 'express';
import request from 'supertest';

import userRoutes from 'interfaces/http/routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

describe('User routes', () => {
  it('POST /users should create a user', async () => {
    const res = await request(app).post('/users').send({ name: 'Luis', email: 'luis@gmail.com' });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Luis');
    expect(res.body.email).toBe('luis@gmail.com');
  });
});
