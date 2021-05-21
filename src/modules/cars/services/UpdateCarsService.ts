import { AppError } from "../../../errors/AppError";
import { Car } from "../infra/typeorm/entities/Car";
import { ICarsRepository } from "../repositories/ICarsRepository";

class UpdateCarsService {
  constructor(
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(car_id: string, carData: Car): Promise<Car> {
    let car = await this.carsRepository.findById(car_id);

    if(!car) {
      throw new AppError('Car not found.', 404);
    }

    carData.id = car.id;

    await this.carsRepository.save(carData);
    
    return this.carsRepository.findById(car_id);
  }
}

export { UpdateCarsService };