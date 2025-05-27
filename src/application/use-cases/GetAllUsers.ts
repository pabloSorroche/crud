import { UserRepository } from 'domain/repositories/UserRepository';

export class GetAllUsers {
  constructor(private readonly userRepo: UserRepository) {}

  async execute() {
    return await this.userRepo.findAll();
  }
}
