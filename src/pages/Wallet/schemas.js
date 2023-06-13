import * as Yup from 'yup';

export const initialValues = {
  name: '',
  account_type: '',
  institution: '',
  description: '',
  current_value: '',
  color: '',
  favorite: '',
};

export const banks = [
  {
    label: 'Bradesco', value: 1,
  },
  {
    label: 'Banco do Brasil', value: 2,
  },
  {
    label: 'Caixa', value: 3,
  },
];

export const accountTypes = [
  {
    label: 'Conta Poupança', value: 1,
  },
  {
    label: 'Conta Corrente', value: 2,
  },
  {
    label: 'Conta de Pagamentos', value: 3,
  },
];

export const registerSchema = () => Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  account_type: Yup.number().required('Campo obrigatório'),
  institution: Yup.number().required('Campo obrigatório'),
  description: Yup.string().required('Campo obrigatório'),
  current_value: Yup.string().required('Limite deve ser maior que zero'),
});
