import { Schema, model, Document } from 'mongoose';
import ICustomer from '../interfaces/iCustomer';

const CustomerSchema = new Schema<ICustomer>({
    name: { type: 'string', required: true },
    cpf: { type: 'string', required: true, unique: true},
    birthDate: { type: Date, required: true },
    email: { type: 'string', required: true, unique: true},
    password: { type: 'string', required: true },
    cep: { type: 'string', required: true },
    uf: { type: 'string', required: true },
    city: { type: 'string', required: true },
    address: { type: 'string', required: true },
    number: { type: 'string', required: true },
    complement: { type: 'string' },
    neighborhood: { type: 'string', required: true },
});

const Customer = model<ICustomer>('Customer', CustomerSchema);
export default Customer;
