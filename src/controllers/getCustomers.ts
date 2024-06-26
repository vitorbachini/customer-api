import { Request, Response, NextFunction } from 'express';
import Customer from '../models/Customer';

export const getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const customers = await Customer.find({}, '-password');
        res.status(200).json(customers);
    } catch (error) {
        next(error);
    }
};

export const getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findById(id, '-password');
        if (!customer) {
            return res
                .status(404)
                .json({ message: `No customer with id: ${id}` });
        }
        res.status(200).json(customer);
    } catch (error) {
        next(error);
    }
};
