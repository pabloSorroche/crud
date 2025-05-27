import { UserRepository } from 'domain/repositories/UserRepository';

export class GetUserByFilter {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(filter: Partial<{ name: string; email: string }>) {
    return this.userRepo.findByFilter(filter);
  }
}
