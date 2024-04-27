import { asyncHandler } from '../utils/asyncHandler.js';

const sayHello = asyncHandler(
    (_req, res, _next) => {
        res.status(200).json({ message: 'Hello from the server!' });
    }
);

export { sayHello };
