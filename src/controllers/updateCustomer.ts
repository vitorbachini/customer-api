import { Request, Response, NextFunction } from 'express';
import Customer from '../models/Customer';
import { hashPassword } from '../services/customerService';
import { getZipCode } from '../services/cepService';

export const updateCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const { name, birthDate, password, cep, number, complement } = req.body;
        
        delete req.body.cpf
        delete req.body.email

        const updateData: any = {
            name,
            birthDate,
            number,
            complement,
        }

        if(password){
            updateData.password = await hashPassword(password)
        }
        try{
            const cepData = await getZipCode(cep)
            updateData.cep = cep
            updateData.uf = cepData.uf
            updateData.city = cepData.city
            updateData.address = cepData.address
            updateData.neighborhood = cepData.neighborhood
        }catch (cepError) {
            res.status(400).send({cepError: cepError});
        }
        const updatedCustomer = await Customer.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
            select: '-password'
        });
        if (!updatedCustomer) {
            return res
                .status(404)
                .json({ message: `No customer with id: ${id}` });
        }
        res.status(200).json(updatedCustomer);
    } catch (error) {
        next(error);
    }
};