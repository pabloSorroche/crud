import { UserRepository } from 'contexts/crud/domain/repositories/UserRepository';

export class DeleteUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(id: string) {
    await this.userRepo.delete(id);
  }
}
