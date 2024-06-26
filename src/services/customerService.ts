import bcrypt from 'bcryptjs';
import Customer from '../models/Customer';

export const checkCpf = async (cpf: string): Promise<boolean> => {
    const existingCpf = await Customer.findOne({ cpf });
    return existingCpf !== null;
};

export const checkEmail = async (email: string): Promise<boolean> => {
    const existingEmail = await Customer.findOne({ email });
    return existingEmail !== null;
};

export const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
};
