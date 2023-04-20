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
} from '@chakra-ui/react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { authSchema, initialValues } from './schemas';
import { FormInput } from '../../components';
import styles from './styles.module.css';

export default function LoginPage({
  // propagates on auth events
  onSuccess,
}) {
  const [hidePassword, setHidePassord] = useState(true);

  function handlePasswordInputVisibility() {
    setHidePassord(!hidePassword);
  }

  function handleCreateAuth() {
    if (onSuccess) onSuccess();
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
                    sufixElement={hidePassword
                      ? (<HiOutlineEyeSlash />)
                      : (<HiOutlineEye />)}
                    onSufixClick={() => handlePasswordInputVisibility()}
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
                    disabled={isSubmitting}
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
