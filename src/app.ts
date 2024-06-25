import express from 'express';

import { customerRouter } from './routes/customerRoute';

export const app = express();

app.use(express.json());

app.use('/api/v1', customerRouter);
