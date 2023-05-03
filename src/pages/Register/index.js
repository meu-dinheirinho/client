/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { Formik } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import {
  FormControl,
  Stack,
  Link,
  Button,
  Flex,
  Heading,
  Text,
  Center,
  HStack,
  Wrap,
} from '@chakra-ui/react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { initialValues, registerSchema } from './schemas';
import { FormInput } from '../../components';
import styles from './styles.module.css';

export default function RegisterPage() {
  const [hidePassword, setHidePassord] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  function handlePasswordInputVisibility() {
    setHidePassord(!hidePassword);
  }

  function handleConfirmPasswordInputVisibility() {
    setHideConfirmPassword(!hideConfirmPassword);
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
            console.log(values);
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
                  {/* <FormControl>
                    <FormInput
                      size={'lg'}
                      type={'number'}
                      placeholder={'Seu telefone'}
                      variant={'filled'}
                      name={'phone'}
                      id={'phone'}
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={touched.phone && errors.phone}
                    />
                  </FormControl> */}
                </HStack>
              </Wrap>
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
                    sufixElement={hidePassword
                      ? (<HiOutlineEyeSlash />)
                      : (<HiOutlineEye />)}
                    onSufixClick={() => handlePasswordInputVisibility()}
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
                    sufixElement={hideConfirmPassword
                      ? (<HiOutlineEyeSlash />)
                      : (<HiOutlineEye />)}
                    onSufixClick={() => handleConfirmPasswordInputVisibility()}
                  />
                </HStack>
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
            Já posui conta? &nbsp;
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
