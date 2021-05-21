import { Router } from 'express';
import { CarsController } from '../controllers/CarsController';

import ensureAuthenticated from '../../../../users/infra/middlewares/ensureAuthenticated';

const carsRouter = Router();

const carsController = new CarsController();

carsRouter.use(ensureAuthenticated);

carsRouter.get('/', carsController.index);
carsRouter.post('/', carsController.create);
carsRouter.put('/:id', carsController.update);
carsRouter.delete('/:id', carsController.delete);

export default carsRouter;