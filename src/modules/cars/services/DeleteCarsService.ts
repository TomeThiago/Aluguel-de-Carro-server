import { ICarsRepository } from "../repositories/ICarsRepository";

class DeleteCarsService {
  constructor(
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.carsRepository.delete(id);
  }
}

export { DeleteCarsService };