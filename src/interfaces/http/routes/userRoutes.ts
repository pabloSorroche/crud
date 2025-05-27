import { Router } from 'express';

import { CreateUser } from 'application/use-cases/CreateUser';
import { DeleteUser } from 'application/use-cases/DeleteUser';
import { GetAllUsers } from 'application/use-cases/GetAllUsers';
import { GetUser } from 'application/use-cases/GetUser';
import { UpdateUser } from 'application/use-cases/UpdateUser';

import { PrismaUserRepo } from 'infrastructure/repositories/PrismaUserRepo';

import { UserController } from '../controlers/UserController';

const router = Router();

const repo = new PrismaUserRepo();

const controller = new UserController(
  new CreateUser(repo),
  new GetUser(repo),
  new GetAllUsers(repo),
  new UpdateUser(repo),
  new DeleteUser(repo)
);

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
