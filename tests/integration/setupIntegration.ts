import { PrismaClient } from '../../generated/prisma';

export const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
});

beforeEach(async () => {
  await prisma.users.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
