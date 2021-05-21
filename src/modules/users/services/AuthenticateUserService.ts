import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/auth';
import { User } from '../infra/typeorm/entities/User';
import { AppError } from '../../../errors/AppError';
import { IHashProvider } from "../infra/providers/models/IHashProvider";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface Request {
  email: string,
  senha: string;
}

interface Response {
  user: User;
  token: string
}

class AuthenticateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider
  ) { }

  public async execute({ email, senha }: Request): Promise<Response> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination., 401');
    }

    const passwordMatched = await this.hashProvider.compareHash(senha, user.senha);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserService }