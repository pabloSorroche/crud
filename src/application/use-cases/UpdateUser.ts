import { UserRepository } from 'domain/repositories/UserRepository';

export class UpdateUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(id: string, email: string, name: string) {
    const user = await this.userRepo.findById(id);

    if (!user) throw new Error('User not found');

    user.changeEmail(email);
    user.changeName(name);

    await this.userRepo.update(user);

    return user;
  }
}
