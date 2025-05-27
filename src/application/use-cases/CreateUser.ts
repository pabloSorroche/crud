import { v4 as uuid } from 'uuid';

import { User } from 'domain/models/User';
import { UserRepository } from 'domain/repositories/UserRepository';

export class CreateUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user = new User(uuid(), name, email);

    await this.userRepo.create(user);

    return user;
  }
}
