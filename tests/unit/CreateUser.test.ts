import { CreateUser } from 'contexts/crud/application/use-cases/CreateUser';

import { InMemoryUserRepo } from 'contexts/crud/infrastructure/repositories/InMemoryUserRepo';

describe('CreateUser Use Case', () => {
  it('should create a user correctly', async () => {
    const repo = new InMemoryUserRepo();
    const createUser = new CreateUser(repo);

    const user = await createUser.execute('Ana', 'ana@gmail.com');

    expect(user.getName()).toBe('Ana');
    expect(user.getEmail()).toBe('ana@gmail.com');
  });
});
