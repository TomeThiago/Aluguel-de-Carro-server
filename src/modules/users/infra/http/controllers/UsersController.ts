import { Request, Response } from "express";

import { UsersRepository } from '../../typeorm/repositories/UsersRepository';
import { CreateUserService } from "../../../services/CreateUserService";
import { BCryptHashProvider } from '../../providers/implementations/BCryptHashProvider';

class UsersController {

  async create(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha } = request.body;

    const userRepository = new UsersRepository();
    const bCryptHashProvider = new BCryptHashProvider();
    const createUserService = new CreateUserService(userRepository, bCryptHashProvider);

    const user = await createUserService.execute({
      nome,
      email,
      senha
    });

    return response.status(201).json(user);
  }
}

export { UsersController }