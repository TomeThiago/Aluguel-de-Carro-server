import { Router } from 'express';

import usersRouter from '../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../modules/users/infra/http/routes/sessions.routes';
import carsRouter from '../modules/cars/infra/http/routes/cars.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/cars', carsRouter);

export { router };