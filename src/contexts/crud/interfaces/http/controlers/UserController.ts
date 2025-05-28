import { Request, Response } from 'express';

import { CreateUser } from 'contexts/crud/application/use-cases/CreateUser';
import { DeleteUser } from 'contexts/crud/application/use-cases/DeleteUser';
import { GetAllUsers } from 'contexts/crud/application/use-cases/GetAllUsers';
import { GetUser } from 'contexts/crud/application/use-cases/GetUser';
import { UpdateUser } from 'contexts/crud/application/use-cases/UpdateUser';

export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly getUser: GetUser,
    private readonly getAllUsers: GetAllUsers,
    private readonly updateUser: UpdateUser,
    private readonly deleteUser: DeleteUser
  ) {}

  create = async (req: Request, res: Response) => {
    try {
      const { name, email } = req.body;
      const user = await this.createUser.execute(name, email);
      res.status(201).json(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.getUser.execute(id);
      res.status(200).json(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  };

  getAll = async (_: Request, res: Response) => {
    try {
      const users = await this.getAllUsers.execute();
      res.status(200).json(users);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const user = await this.updateUser.execute(id, name, email);
      res.status(200).json(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.deleteUser.execute(id);
      res.status(204).json(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
