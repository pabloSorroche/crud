import { Router } from 'express';

import { CreateUser } from 'contexts/crud/application/use-cases/CreateUser';
import { DeleteUser } from 'contexts/crud/application/use-cases/DeleteUser';
import { GetAllUsers } from 'contexts/crud/application/use-cases/GetAllUsers';
import { GetUser } from 'contexts/crud/application/use-cases/GetUser';
import { UpdateUser } from 'contexts/crud/application/use-cases/UpdateUser';

import { PrismaUserRepo } from 'contexts/crud/infrastructure/repositories/PrismaUserRepo';

import { UserRole } from 'contexts/auth/domain/UserRole';
import { authorizeRoles } from 'contexts/auth/infrastructure/middlewares/authorizeRoles';
import { authMiddleware } from 'contexts/auth/infrastructure/middlewares/authMiddleware';

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

router.use(authMiddleware);

router.post('/', authorizeRoles([UserRole.ADMIN]), controller.create);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Users not found or error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error message
 *     description: |
 *       Requires authorization with roles ADMIN or USER.
 */
router.get('/', authorizeRoles([UserRole.ADMIN, UserRole.USER]), controller.getAll);
router.get('/:id', authorizeRoles([UserRole.ADMIN, UserRole.USER]), controller.get);
router.put('/:id', authorizeRoles([UserRole.ADMIN]), controller.update);
router.delete('/:id', authorizeRoles([UserRole.ADMIN]), controller.delete);

export default router;
