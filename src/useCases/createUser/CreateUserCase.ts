import { hash } from 'bcryptjs';
import { client } from '../../database/PrismaClient';

interface IUserRequest {
  name: string;
  password: string;
  username: string;
}

class CreateUserCase {
  async execute({ name, username, password }: IUserRequest) {

    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const passwordHash = await hash(password, 8);

    const user = await client.user.create({
      data: {
        name,
        username,
        password: passwordHash,
      }
    });

    return user;
  }
};

export { CreateUserCase };