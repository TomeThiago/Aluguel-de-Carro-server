import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";
import { ICarsRepository } from "../repositories/ICarsRepository";

class CreateCarsService {
  constructor(
    private carsRepository: ICarsRepository,  
  ) { }

  public async execute({ marca, modelo, ano, cor, combustivel, preco }: ICreateCarDTO): Promise<Car> {
    const car = await this.carsRepository.create({
      marca,
      modelo,
      ano,
      cor,
      combustivel,
      preco
    });

    return car;
  }
}

export { CreateCarsService }