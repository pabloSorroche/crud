import { UserRepository } from 'domain/repositories/UserRepository';

export class GetUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(id: string) {
    const user = this.userRepo.findById(id);

    if (!user) throw new Error('User not found');

    return user;
  }
}
