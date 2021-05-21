import { User } from '../infra/typeorm/entities/User';
import { AppError } from '../../../errors/AppError';
import { IUsersRepository } from "../repositories/IUsersRepository";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IHashProvider } from '../infra/providers/models/IHashProvider';

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider
  ) { }

  public async execute({ nome, email, senha }: ICreateUserDTO): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashPassword = await this.hashProvider.generateHash(senha);

    const user = await this.usersRepository.create({
      nome,
      email,
      senha: hashPassword,
    });

    return user;
  }
}

export { CreateUserService }