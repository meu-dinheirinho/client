import * as Yup from 'yup';

export const initialValues = {
  alias: '',
  last_four_digits: '',
  limit_value: '',
  closing_date: '',
  invoice_date: '',
  id_wallet: '',
};

export const creditCardSchema = () => Yup.object().shape({
  alias: Yup.string().required('Campo obrigatório'),
  last_four_digits: Yup.number().min(4, 'Informe os últimos 4 dígitos do cartão').max(4, 'Informe apenas os 4 últimos 4 dígitos do cartão').required('Campo obrigatório'),
  limit_value: Yup.number().min(1, 'Limite deve ser maior que zero').required('Campo obrigatório'),
  closing_date: Yup.number().min(1, 'informe um dia ente 1 e 31').max(31, 'informe um dia ente 1 e 31').required('Campo obrigatório'),
  invoice_date: Yup.number().min(1, 'informe um dia ente 1 e 31').max(31, 'informe um dia ente 1 e 31').required('Campo obrigatório'),
  id_wallet: Yup.string().required('Campo obrigatório'),
});
