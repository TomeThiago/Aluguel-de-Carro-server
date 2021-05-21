import { Request, Response } from 'express';
import { UsersRepository } from '../../typeorm/repositories/UsersRepository';
import { AuthenticateUserService } from '../../../services/AuthenticateUserService';
import { BCryptHashProvider } from '../../providers/implementations/BCryptHashProvider';

class SessionsController {

  async create(request: Request, response: Response): Promise<Response> {
    const { email, senha } = request.body;

    const usersRepository = new UsersRepository();
    const bCryptHashProvider = new BCryptHashProvider();
    const authenticate = new AuthenticateUserService(usersRepository, bCryptHashProvider);

    const { user, token } = await authenticate.execute({
      email,
      senha,
    });

    return response.json({ user, token });
  }
}

export { SessionsController }