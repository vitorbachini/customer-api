import { Request, Response, NextFunction } from 'express';
import Customer from '../models/Customer';
import { getZipCode } from '../services/cepService';
import {
    checkCpf,
    checkEmail,
    hashPassword,
} from '../services/customerService';

export const createCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { name, cpf, birthDate, email, password, cep, number} =
            req.body;
            
        if (await checkCpf(cpf)) {
            return res.status(400).json({ message: 'Cpf already exists' });
        }
        if (await checkEmail(email)) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await hashPassword(password);
        try {
            const cepData = await getZipCode(cep);

            const customer = await Customer.create({
                name,
                cpf,
                birthDate,
                email,
                password: hashedPassword,
                cep,
                uf: cepData.uf,
                city: cepData.city,
                address: cepData.address,
                number,
                complement: cepData.complement,
                neighborhood: cepData.neighborhood
            });

            res.status(201).json({
                id: customer.id,
                name: customer.name,
                cpf: customer.cpf,
                birthDate: customer.birthDate,
                email: customer.email,
                cep: customer.cep,
                uf: customer.uf,
                city: customer.city,
                address: customer.address,
                number: customer.number,
                complement: customer.complement,
                neighborhood: customer.neighborhood
            })
        } catch (cepError) {
            res.status(400).json({ message: 'Cep ERROR'  });
        }
    } catch (error) {
        next(error);
    }
};
