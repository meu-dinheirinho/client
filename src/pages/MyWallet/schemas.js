import * as Yup from 'yup';

export const initialValues = {
  description: '',
  cardNumber: '',
  flag: '',
  limit: 0.00,
  invoiceClosingDate: '',
  invoiceDueDate: '',
};

const options = [
  'Visa',
  'Mastercard',
  'American Express',
  'Elo',
  'Hipercard',
];

export const creditCardSchema = () => Yup.object().shape({
  description: Yup.string().required('Campo obrigatório'),
  cardNumber: Yup.string().required('Campo obrigatório'),
  flag: Yup.string().required('Campo obrigatório').oneOf(options).label('Selected Country'),
  limit: Yup.number().min(1, 'Limite deve ser maior que zero').required('Campo obrigatório'),
  invoiceClosingDate: Yup.number().min(1).max(31).required('Campo obrigatório'),
  invoiceDueDate: Yup.number().min(1).max(31).required('Campo obrigatório'),
});
