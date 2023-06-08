import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { initialValues, registerSchema } from './schemas';
import { AccountCard, FormInput } from '../../components';

export default function Wallet() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [card, setCard] = useState();

  useEffect(() => {
    console.log('mudou o card!');
  });

  return (
    <div>
      <HStack>
        <Flex flexDirection={'column'} minH={'100%'}>
          <Button onClick={onOpen} my={2} gap={3} variant="outline" bg="var(--gray-200)"><AddIcon boxSize={3} />Adicionar Conta</Button>
          <AccountCard account="Conta Nubank" typeAccount="Poupança" institution="AB" width={'100%'} value1="200,00" value2="1.200,50" bg="rgba(81, 69, 158, 0.20)" border="#51459E" onclickTitle={() => setCard(1)} />
          <AccountCard account="Conta Nubank" typeAccount="Poupança" institution="AB" width={'100%'} value1="200,00" value2="1.200,50" bg="rgba(81, 69, 158, 0.20)" border="#51459E" onclickTitle={() => setCard(2)} />
        </Flex>
        <Flex bg={'red.200'} width={'40%'} minH={'100%'}>
          {card}
        </Flex>
      </HStack>

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
          <Modal blockScrollOnMount={false} isOpen={isOpen} size="4xl" onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color="var(--purple)">Nova conta</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <HStack mb={4}>
                  <FormControl width={'130%'}>
                    <FormInput
                      size={'md'}
                      type={'text'}
                      placeholder={'Nome da conta'}
                      variant={'outline'}
                      name={'name'}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={touched.name && errors.name}
                    />
                  </FormControl>
                  <FormControl>
                    <Select placeholder="Selecione a Instituição" name="institution">
                      <option value="1">Bradesco</option>
                      <option value="2">Banco do Brasil</option>
                      <option value="3">Caixa</option>
                    </Select>
                    <Text fontSize={'small'} color={'red'}>{errors.institution || null}</Text>
                  </FormControl>
                </HStack>
                <HStack mb={4}>
                  <FormControl>
                    <FormInput
                      size={'md'}
                      type={'text'}
                      placeholder={'Descrição'}
                      variant={'outline'}
                      name={'description'}
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={touched.description && errors.description}
                    />
                  </FormControl>
                  <FormControl>
                    <Select placeholder="Selecione o tipo de conta" name="account_type">
                      <option value="1">Conta Poupança</option>
                      <option value="2">Conta Corrente</option>
                      <option value="3">Conta de Pagamentos</option>
                    </Select>
                    <Text fontSize={'small'} color={'red'}>{errors.account_type || null}</Text>
                  </FormControl>
                </HStack>
                <HStack mb={4}>
                  <FormControl width={'25%'}>
                    <FormInput
                      size={'md'}
                      type={'text'}
                      placeholder={'Saldo Inicial'}
                      variant={'outline'}
                      name={'current_value'}
                      value={values.current_value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={touched.current_value && errors.current_value}
                    />
                  </FormControl>
                  <Flex direction="column">
                    <Text fontSize={'small'}>Cor da Conta</Text>
                    <Flex gap={2}>
                      <label htmlFor="color1" className={styles.labelInputColor}>
                        <input type="radio" id="color1" name="color" value="#F9896B" />
                      </label>
                      <label htmlFor="color2" className={styles.labelInputColor}>
                        <input type="radio" id="color2" name="color" value="#84E8F4" />
                      </label>
                      <label htmlFor="color3" className={styles.labelInputColor}>
                        <input type="radio" id="color3" name="color" value="#605DEC" />
                      </label>
                      <label htmlFor="color4" className={styles.labelInputColor}>
                        <input type="radio" id="color4" name="color" value="#EA5A47" />
                      </label>
                    </Flex>
                  </Flex>
                </HStack>
                <Stack align="center" direction="row">
                  <Switch id="email-alerts" size="md" colorScheme="purple" />
                  <FormControl display="flex" gap={2} alignItems="center">
                    <FormLabel htmlFor="email-alerts" m={0}>
                      Favoritar conta?
                    </FormLabel>
                  </FormControl>
                </Stack>
              </ModalBody>

              <ModalFooter gap={4}>
                <Button variant="ghost" px={8} onClick={onClose}>Cancelar</Button>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit} bg="var(--purple)" px={8} disabled={isSubmitting}>
                  Salvar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Formik>

    </div>
  );
}
