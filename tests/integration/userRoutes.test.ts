import { prisma } from './setupIntegration';

describe('User routes', () => {
  it('POST /users should create a user', async () => {
    const user = await prisma.users.create({
      data: {
        id: '3a23aabd-c61b-4393-ace5-1d890163de8f',
        name: 'Test User',
        email: 'test@example.com',
      },
    });

    const found = await prisma.users.findUnique({
      where: { id: user.id },
    });

    expect(found).not.toBeNull();
    expect(found?.email).toBe('test@example.com');
  });
});
