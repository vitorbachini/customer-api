import { Request, Response } from 'express';
import Customer from '../models/Customer';

export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findById(id);
        if (!customer) {
            return res
                .status(404)
                .json({ message: `No customer with id: ${id}` });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
