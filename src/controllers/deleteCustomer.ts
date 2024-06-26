import { Request, Response, NextFunction } from 'express';
import Customer from '../models/Customer';

export const deleteCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { id } = req.params;
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(id);
        if (!deletedCustomer) {
            return res
                .status(404)
                .json({ message: `No customer with id: ${id}` });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        next(error);
    }
};
