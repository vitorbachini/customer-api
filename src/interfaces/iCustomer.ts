interface ICustomer extends Document {
    name: string;
    cpf: string;
    birthDate: string;
    email: string;
    password: string;
    cep: string;
    uf: string;
    city: string;
    address: string;
    number: string;
    complement?: string;
    neighborhood: string;
}

export default ICustomer;