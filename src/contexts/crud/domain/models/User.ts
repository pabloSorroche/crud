export class User {
  constructor(
    private readonly id: string,
    private name: string,
    private email: string
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  changeName(newName: string) {
    this.name = newName;
  }

  changeEmail(newEmail: string) {
    if (!newEmail.includes('@')) throw new Error('Invalid email');

    this.email = newEmail;
  }
}
