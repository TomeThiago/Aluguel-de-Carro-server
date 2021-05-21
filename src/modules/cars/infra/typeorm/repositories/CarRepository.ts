import { getRepository, Repository } from 'typeorm';
import { ICreateCarDTO } from '../../../dtos/ICreateCarDTO';
import { IFilterCarDTO } from '../../../dtos/IFilterCarDTO';
import { ICarsRepository } from '../../../repositories/ICarsRepository';
import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private ormRepository: Repository<Car>;

  constructor() {
    this.ormRepository = getRepository(Car);
  }

  public async findById(id: string): Promise<Car | undefined> {
    const car = await this.ormRepository.findOne(id);

    return car;
  }

  public async get(filters: IFilterCarDTO): Promise<Car[]> {
    const cars = await this.ormRepository.find(filters);

    return cars;
  }

  public async create(carData: ICreateCarDTO): Promise<Car> {
   const car = await this.ormRepository.create(carData);

   await this.save(car);

   return car;
  }
  
  public async save(car: Car): Promise<Car> {
    return this.ormRepository.save(car);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export { CarsRepository }