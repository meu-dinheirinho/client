/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import { Formik } from 'formik';
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
} from '@chakra-ui/react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { authSchema, initialValues } from './schemas';
import { FormInput } from '../../components';
import styles from './styles.module.css';

export default function LoginPage() {
  const [hidePassword, setHidePassord] = useState(true);

  function handlePasswordInputVisibility() {
    setHidePassord(!hidePassword);
  }

  return (
    <Flex h={'90vh'} alignItems={'center'} justifyContent={'center'} gap={26}>
      <Hide below={'md'}>
        <Flex flex={2}>
          <Box />
        </Flex>
      </Hide>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={10} width={'100%'}>
          <Heading as={'h3'} size={'lg'}>
            Login
          </Heading>

          <Formik
            initialValues={initialValues}
            validationSchema={authSchema}
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
                <Stack spacing={10}>
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
                </Stack>
              </Stack>
            )}
          </Formik>
        </Stack>
      </Flex>
    </Flex>
  );
}
