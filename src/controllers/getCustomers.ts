import { Request, Response, NextFunction } from 'express';
import Customer from '../models/Customer';

export const getAllCustomers = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { page = 1, limit = 5 } = req.params;
        const pageNumber = parseInt(page as string, 5);
        const limitNumber = parseInt(limit as string, 5);

        const customers = await Customer.find({}, '-password')
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        const totalCustomers = await Customer.countDocuments({});
        const totalPages = Math.ceil(totalCustomers / limitNumber);

        res.status(200).json({
            customers,
            totalCustomers,
            totalPages,
            currentPage: pageNumber,
        });
    } catch (error) {
        next(error);
    }
};

export const getCustomerById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
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
