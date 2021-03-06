import 'reflect-metadata';
import 'express-async-errors';

import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';

import { AppError } from './errors/AppError';
import { router } from './routes';

import './database';

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export { app };