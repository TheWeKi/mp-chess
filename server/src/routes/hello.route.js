import { Router } from 'express';
import { sayHello } from '../controllers/hello.controller.js';

const helloRouter = Router();

helloRouter
    .route('/')
    .get(sayHello);

export { helloRouter };
