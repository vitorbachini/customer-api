import express from 'express';
import swaggerUi from 'swagger-ui-express'

import { customerRouter } from './routes/customerRoute';
import { errorHandler } from './middlewares/errorMiddleware';
import swaggerDocs from './swagger.json'

export const app = express();

app.use(express.json());
app.use(errorHandler)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/v1', customerRouter);
