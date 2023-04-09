import * as Yup from 'yup';

export const initialValues = { email: '', password: '' };

export const authSchema = () => Yup.object().shape({
  email: Yup.string().email('Informe um email válido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});
