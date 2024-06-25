import axios from 'axios';
import ICep from '../interfaces/iCep';

export const getZipCode = async (cep: string): Promise<ICep> => {
    try {
        const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json`,
        );
        
        if (response.data.error){
            throw new Error('Cep not found!')
        }

        return{
            uf: response.data.uf,
            localidade: response.data.localidade,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro
        }

    } catch (error) {
        throw new Error(`Error fetching cep data`)
    }
};
