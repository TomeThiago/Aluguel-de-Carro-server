import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('Database connected with successes!'))
  .catch((error) => console.log(error.message));