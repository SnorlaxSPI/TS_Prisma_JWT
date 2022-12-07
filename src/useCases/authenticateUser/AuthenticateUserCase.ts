import { compare } from 'bcryptjs';
import { client } from '../../database/PrismaClient'

interface IRequest {
  username: string;
  password: string;
};

class AuthenticateUserCase {
  async execute({ username, password }: IRequest) {
    // Verificar se o usuário existe

    const userAlreadyExists = await client.user.findFirst({
      where: {
        username,
      }
    });

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect!');
    }

    // Verificar se a senha está correta

    const passwordMatch = await compare(password, userAlreadyExists.password);

    if (!passwordMatch) {
      throw new Error('User or password incorrect!');
    }
  }
};

export { AuthenticateUserCase };