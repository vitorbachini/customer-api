import { Router } from 'express';
import { validateReq } from '../middlewares/validationMiddleware';
import {
    createCustomerValid,
    updateCustomerValid,
} from '../validation/customer';

export const customerRouter = Router();

customerRouter.route('/client').post(validateReq(createCustomerValid));
customerRouter.route('/client').get();
customerRouter.route('/client/:id').get();
customerRouter.route('/client/:id').patch(validateReq(updateCustomerValid));
customerRouter.route('/client/:id').delete();