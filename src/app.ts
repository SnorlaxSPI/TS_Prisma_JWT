import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import { indexRouter } from './routes/indexRoutes';

const app = express();

app.use(express.json());

app.use(indexRouter);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
      status: "Error",
      message: error.message,
    });
  }
);

app.listen(3333, () => {
  console.log('🚀🚀 Server Started!');
});

export { app };