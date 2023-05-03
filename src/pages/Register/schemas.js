import * as Yup from 'yup';

export const initialValues = {
  email: '',
  name: '',
  password: '',
  phone: '',
  confirmPassword: '',
};

export const registerSchema = () => Yup.object().shape({
  email: Yup.string().email('Informe um email válido').required('Campo obrigatório'),
  name: Yup.string().required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais').required('Campo obrigatório'),
});
