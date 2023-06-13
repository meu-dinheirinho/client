/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { Formik } from 'formik';
import {
  FormControl,
  Stack,
  Link,
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  Wrap,
  useToast,
} from '@chakra-ui/react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { initialValues, registerSchema } from './schemas';
import { FormInput } from '../../components';
import styles from './styles.module.css';
import useLoading from '../../hooks/loading';
import AuthService from '../../services/auth';

export default function RegisterPage({
  onRegister,
}) {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [loading, start, done] = useLoading();
  const toast = useToast();

  function handlePasswordInputVisibility() {
    setHidePassword(!hidePassword);
  }

  function handleConfirmPasswordInputVisibility() {
    setHideConfirmPassword(!hideConfirmPassword);
  }

  function handleRegisterUser(userData) {
    start();
    const authService = new AuthService();
    authService.store(userData).then(() => {
      toast({
        title: 'Registro',
        description: 'Usuário cadastrado com sucesso',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      if (onRegister) onRegister();
    }).catch(() => {
      toast({
        title: 'Registro',
        description: 'Ocorreu um erro ao cadastrar usuário.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }).finally(() => {
      done();
    });
  }

  return (
    <Flex p={8} maxW={'lg'} align={'center'} justify={'center'}>
      <Stack spacing={10} width={'100%'}>
        <Heading as={'h3'} size={'lg'}>
          Registro
        </Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            handleRegisterUser(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Stack spacing={22}>
              <Wrap spacing={8}>
                <HStack>
                  <FormControl>
                    <FormInput
                      size={'lg'}
                      type={'text'}
                      placeholder={'Nome'}
                      variant={'filled'}
                      name={'name'}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={touched.name && errors.name}
                    />
                  </FormControl>
                  <FormControl>
                    <FormInput
                      size={'lg'}
                      type={'number'}
                      placeholder={'Telefone'}
                      variant={'filled'}
                      name={'phone'}
                      id={'phone'}
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={touched.phone && errors.phone}
                    />
                  </FormControl>
                </HStack>
              </Wrap>
              <Stack>
                <FormControl>
                  <FormInput
                    size={'lg'}
                    type={'email'}
                    placeholder={'Seu melhor email'}
                    variant={'filled'}
                    name={'email'}
                    id={'email'}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMsg={touched.email && errors.email}
                  />
                </FormControl>
              </Stack>
              <Stack spacing={4}>
                <HStack>
                  <FormInput
                    size={'lg'}
                    type={hidePassword ? 'password' : 'text'}
                    placeholder={'Senha'}
                    variant={'filled'}
                    name={'password'}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMsg={touched.password && errors.password}
                    suffixElement={hidePassword
                      ? (<HiOutlineEyeSlash />)
                      : (<HiOutlineEye />)}
                    onSuffixClick={() => handlePasswordInputVisibility()}
                  />
                  <FormInput
                    size={'lg'}
                    type={hideConfirmPassword ? 'password' : 'text'}
                    placeholder={'Confirme a senha'}
                    variant={'filled'}
                    name={'confirmPassword'}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMsg={touched.confirmPassword && errors.confirmPassword}
                    suffixElement={hideConfirmPassword
                      ? (<HiOutlineEyeSlash />)
                      : (<HiOutlineEye />)}
                    onSuffixClick={() => handleConfirmPasswordInputVisibility()}
                  />
                </HStack>
              </Stack>
              <Stack spacing={6}>
                <Button
                  className={styles.button}
                  disabled={isSubmitting || loading}
                  isLoading={loading}
                  type={'submit'}
                  bg={'var(--purple)'}
                  color={'white'}
                  size={'lg'}
                  _hover={{
                    background: 'var(--purple-900)',
                  }}
                  onClick={handleSubmit}
                >
                  Registrar
                </Button>
              </Stack>
            </Stack>
          )}
        </Formik>
        <Stack pt={6}>
          <Text align={'center'}>
            Já possui conta? &nbsp;
            <Link
              href={'login'}
              color={'blue.400'}
            >
              Entre
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
