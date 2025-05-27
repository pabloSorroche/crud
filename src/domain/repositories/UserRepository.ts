import { User } from 'domain/models/User';

export interface UserRepository {
  create(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByFilter(filter: Partial<{ name: string; email: string }>): Promise<User[]>;
  update(user: User): Promise<void>;
}
