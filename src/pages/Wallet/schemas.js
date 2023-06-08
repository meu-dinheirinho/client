import * as Yup from 'yup';

export const initialValues = {
  name: '',
  account_type: '',
  institution: '',
  description: '',
  current_value: '',
  account_color: '',
  favorite_account: '',
};

export const registerSchema = () => Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  account_type: Yup.number().required('Campo obrigatório'),
  institution: Yup.number().required('Campo obrigatório'),
  description: Yup.string().required('Campo obrigatório'),
  current_value: Yup.string().required('Limite deve ser maior que zero'),
});
