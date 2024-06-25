import Joi from 'joi';
import {
    cpfRegex,
    dateRegex,
    nameRegex,
    passwordRegex,
    cepRegex,
    numberRegex,
} from './regex';

export const createCustomerValid = Joi.object({
    name: Joi.string().regex(nameRegex).min(3).required(),
    cpf: Joi.string().regex(cpfRegex).required(),
    birthDate: Joi.string().regex(dateRegex).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordRegex).min(6).required(),
    cep: Joi.string().regex(cepRegex).required(),
    number: Joi.string().regex(numberRegex).min(1).required(),
});

export const updateCustomerValid = Joi.object({
    name: Joi.string().regex(nameRegex).min(3),
    birthDate: Joi.string().regex(dateRegex),
    password: Joi.string().regex(passwordRegex).min(6),
    cep: Joi.string().regex(cepRegex),
    number: Joi.string().regex(numberRegex).min(1),
})