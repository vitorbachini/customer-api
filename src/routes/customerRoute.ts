import { Router } from 'express';
import { validateReq } from '../middlewares/validationMiddleware';
import {
    createCustomerValid,
    updateCustomerValid,
} from '../validation/customer';
import { getAllCustomers, getCustomerById } from '../controllers/getCustomers';
import { createCustomer } from '../controllers/createCustomer';
import { deleteCustomer } from '../controllers/deleteCustomer';
import { validateId } from '../middlewares/validateIdMiddleware';
import { updateCustomer } from '../controllers/updateCustomer';

export const customerRouter = Router();

customerRouter
    .route('/client')
    .post(validateReq(createCustomerValid), createCustomer);
customerRouter.route('/client').get(getAllCustomers);
customerRouter.route('/client/:id').get(validateId, getCustomerById);
customerRouter
    .route('/client/:id')
    .patch(validateId, validateReq(updateCustomerValid), updateCustomer);
customerRouter.route('/client/:id').delete(validateId, deleteCustomer);
