import { Request, Response } from "express";
import { GetCarsService } from "../../../services/GetCarsService";
import { CreateCarsService } from "../../../services/CreateCarsService";
import { DeleteCarsService } from "../../../services/DeleteCarsService";
import { CarsRepository } from "../../typeorm/repositories/CarRepository";
import { UpdateCarsService } from "../../../services/UpdateCarsService";
import { Car } from "../../typeorm/entities/Car";
import { IFilterCarDTO } from "../../../dtos/IFilterCarDTO";

class CarsController {
  async index(request: Request, response: Response): Promise<Response> {
    const carsRepository = new CarsRepository();
    const getCarsService = new GetCarsService(carsRepository);

    const filters: IFilterCarDTO = request.query;

    const cars = await getCarsService.execute(filters);

    return response.status(200).json(cars);
  };

  async create(request: Request, response: Response): Promise<Response> {
    const { marca, modelo, ano, cor, combustivel, preco } = request.body;

    const carsRepository = new CarsRepository();
    const createCarsService = new CreateCarsService(carsRepository);

    const car = await createCarsService.execute({
      marca,
      modelo,
      ano,
      cor,
      combustivel,
      preco
    });

    return response.status(201).json(car);
  };

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const carsRepository = new CarsRepository();
    const updateCarsService = new UpdateCarsService(carsRepository);

    const carData = new Car(request.body);

    const car = await updateCarsService.execute(id, carData);

    return response.status(200).json(car);
  };

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const carsRepository = new CarsRepository();
    const deleteCarsService = new DeleteCarsService(carsRepository);

    await deleteCarsService.execute(id);

    return response.status(200).send();
  };
}

export { CarsController }