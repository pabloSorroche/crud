import { User } from 'domain/models/User';
import { UserRepository } from 'domain/repositories/UserRepository';

export class InMemoryUserRepo implements UserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.getId() === id);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async create(user: User): Promise<void> {
    this.users = [...this.users, user];
  }

  async update(userParam: User): Promise<void> {
    const userFind = this.users.find(user => user.getId() === userParam.getId());

    if (!userFind) throw new Error('User not found');

    this.users = this.users.map(user => {
      if (user.getId() === userParam.getId()) {
        return userParam;
      }

      return user;
    });
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter(user => user.getId() !== id);
  }

  async findByFilter(filter: Partial<{ name: string; email: string }>): Promise<User[]> {
    return this.users.filter(user => {
      const matchName = filter.name ? user.getName().includes(filter.name) : true;
      const matchEmail = filter.email ? user.getEmail().includes(filter.email) : true;

      return matchName && matchEmail;
    });
  }
}
