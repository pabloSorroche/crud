import { User } from 'contexts/crud/domain/models/User';
import { UserRepository } from 'contexts/crud/domain/repositories/UserRepository';

import prisma from 'contexts/crud/infrastructure/db/PrismaClient';

export class PrismaUserRepo implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const user = await prisma.users.findUnique({ where: { id } });

    return user ? new User(user.id, user.name, user.email) : null;
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.users.findMany();

    return users.map(user => new User(user.id, user.name, user.email));
  }

  async create(user: User): Promise<void> {
    await prisma.users.create({
      data: {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      },
    });
  }

  async update(user: User): Promise<void> {
    await prisma.users.update({
      where: { id: user.getId() },
      data: {
        name: user.getName(),
        email: user.getEmail(),
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.users.delete({ where: { id } });
  }

  async findByFilter(filter: Partial<{ name: string; email: string }>): Promise<User[]> {
    const users = await prisma.users.findMany({
      where: {
        name: filter.name ? { contains: filter.name } : undefined,
        email: filter.email ? { contains: filter.email } : undefined,
      },
    });

    return users.map(user => new User(user.id, user.name, user.email));
  }
}
