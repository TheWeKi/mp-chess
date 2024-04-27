import express from 'express';

import { errorMiddleware } from './src/middlewares/error.middleware.js';

import { helloRouter } from './src/routes/hello.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', helloRouter);

app.use(errorMiddleware);

export { app };
