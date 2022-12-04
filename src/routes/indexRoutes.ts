import { Router } from 'express';
import { CreateUserController } from '../useCases/createUser/CreateUserController';

const indexRouter = Router();

const createUserController = new CreateUserController();

indexRouter.post('/users', createUserController.handle);

export { indexRouter };