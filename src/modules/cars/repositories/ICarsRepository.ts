import { Car } from "../infra/typeorm/entities/Car";
import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { IFilterCarDTO } from "../dtos/IFilterCarDTO";

export interface ICarsRepository {
  get(filters: IFilterCarDTO): Promise<Car[]>;
  findById(id: string): Promise<Car | undefined>;
  create(car: ICreateCarDTO): Promise<Car>;
  save(car: Car): Promise<Car>;
  delete(id: string): Promise<void>;
}