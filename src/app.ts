import express from 'express';

import { customerRouter } from './routes/customerRoute';
import { errorHandler } from './middlewares/errorMiddleware';

export const app = express();

app.use(express.json());
app.use(errorHandler)

app.use('/api/v1', customerRouter);
