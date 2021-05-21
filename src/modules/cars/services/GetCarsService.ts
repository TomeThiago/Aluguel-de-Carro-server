import { IFilterCarDTO } from "../dtos/IFilterCarDTO";
import { Car } from "../infra/typeorm/entities/Car";
import { ICarsRepository } from "../repositories/ICarsRepository";

class GetCarsService {
  constructor(
    private carsRepository: ICarsRepository,  
  ) { }

  public async execute(filters: IFilterCarDTO): Promise<Car[]> {
    const cars = await this.carsRepository.get(filters);

    return cars;
  }
}

export { GetCarsService }