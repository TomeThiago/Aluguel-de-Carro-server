import { User } from "../infra/typeorm/entities/User";
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(user: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}