/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { Formik } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import {
  Box,
  FormControl,
  Checkbox,
  Stack,
  Link,
  Button,
  Flex,
  Heading,
  Hide,
  Text,
  Center,
  Image,
  useToast,
} from '@chakra-ui/react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { authSchema, initialValues } from './schemas';
import { FormInput } from '../../components';
import styles from './styles.module.css';
import AuthService from '../../services/auth';
import useLoading from '../../hooks/loading';

export default function LoginPage({
  // propagates on auth events
  onSuccess,
}) {
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, start, done] = useLoading();
  const toast = useToast();

  function handlePasswordInputVisibility() {
    setHidePassword(!hidePassword);
  }

  function handleCreateAuth(usrData) {
    start();
    const authService = new AuthService();
    authService.login(usrData).then(({ data }) => {
      if (onSuccess) onSuccess(data.token);
      toast({
        title: 'Login',
        description: 'Bem vindo!',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }).catch(() => {
      toast({
        title: 'Login',
        description: 'Usuário ou senha inválido',
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
    <Flex h={'85vh'} alignItems={'center'} justifyContent={'center'} gap={26}>
      <Hide below={'md'}>
        <Flex h={'85vh'} alignItems={'center'} justifyContent={'center'} flex={2}>
          <Image
            alt={'Login Image'}
            objectFit={'contain'}
            h={'100%'}
            src={'/hero.png'}
          />
          <Box />
        </Flex>
      </Hide>
      <Flex flex={1.5} align={'center'} justify={'center'}>
        <Stack spacing={10} width={'100%'}>
          <Heading as={'h3'} size={'lg'}>
            Login
          </Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={authSchema}
            onSubmit={(values) => {
              handleCreateAuth(values);
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
                <FormControl>
                  <FormInput
                    size={'lg'}
                    type={'email'}
                    placeholder={'Email'}
                    variant={'filled'}
                    name={'email'}
                    id={'email'}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMsg={touched.email && errors.email}
                  />
                </FormControl>
                <Stack spacing={4}>
                  <FormInput
                    size={'lg'}
                    type={hidePassword ? 'password' : 'text'}
                    placeholder={'Senha'}
                    variant={'filled'}
                    name={'password'}
                    id={'password'}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorMsg={touched.password && errors.password}
                    suffixElement={hidePassword
                      ? (<HiOutlineEyeSlash />)
                      : (<HiOutlineEye />)}
                    onSuffixClick={() => handlePasswordInputVisibility()}
                  />
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Lembre-me</Checkbox>
                    <Link href={'/#'} color={'var(--purple-900)'}>Esqueceu a senha?</Link>
                  </Stack>
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
                    Entrar
                  </Button>
                  <Text align={'center'}>
                    Ou
                  </Text>
                  <Button w={'full'} size={'lg'} variant={'outline'} leftIcon={<FcGoogle />}>
                    <Center>
                      <Text>Entre com Google</Text>
                    </Center>
                  </Button>
                </Stack>
              </Stack>
            )}
          </Formik>
          <Stack pt={6}>
            <Text align={'center'}>
              Não tem uma conta? &nbsp;
              <Link
                href={'register'}
                color={'blue.400'}
              >
                Cadastre-se
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
}
