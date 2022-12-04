import { Request, Response } from 'express';
import { CreateUserCase } from './CreateUserCase';

class CreateUserController {

  async handle (request:Request, response:Response) {
    const { username, name, password } = request.body;

    const createUserCase = new CreateUserCase();

    const user = await createUserCase.execute({
      username,
      name,
      password,
    });

    return response.json(user);
  }
}

export { CreateUserController };