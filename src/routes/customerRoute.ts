import { Router } from 'express';
import { validateReq } from '../middlewares/validationMiddleware';
import {
    createCustomerValid,
    updateCustomerValid,
} from '../validation/customer';
import { getAllCustomers, getCustomerById } from '../controllers/getCustomers';
import { createCustomer } from '../controllers/createCustomer';

export const customerRouter = Router();

customerRouter.route('/client').post(validateReq(createCustomerValid), createCustomer);
customerRouter.route('/client').get(getAllCustomers);
customerRouter.route('/client/:id').get(getCustomerById);
customerRouter.route('/client/:id').patch(validateReq(updateCustomerValid));
customerRouter.route('/client/:id').delete();