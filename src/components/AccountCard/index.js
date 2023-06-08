import {
  Box,
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
  Spacer,
  Stack,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditIcon } from '@chakra-ui/icons';
import React from 'react';
import styles from './styles.module.css';
import FormInput from '../Input';

export default function AccountCard({
  account, typeAccount, institution, value1, value2, bg, border, onclickTitle, ...rest
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bg={bg} border="1px solid" borderColor={border} borderRadius="10" className={styles.AccountBox} direction="row" {...rest}>
      <Flex direction="column">
        <Flex className={styles.AccountContent} direction="column">
          <Text fontSize="16px" className={styles.AccountTitle} onClick={onclickTitle !== '' && onclickTitle}>{account}</Text>
          <Text fontSize="16px" mb="26px" className={styles.AccountText}>{typeAccount} - instituição {institution}</Text>
        </Flex>
        <Flex mt="24px">
          <Box>
            <Text fontSize="16px" className={styles.AccountTitle}>Saldo</Text>
            <Text fontSize="16px" className={styles.AccountText}>R$ {value1}</Text>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize="16px" className={styles.AccountTitle}>Saldo Previsto</Text>
            <Text fontSize="16px" className={styles.AccountText}>R$ {value2}</Text>
          </Box>
        </Flex>
      </Flex>
      <Box>
        <EditIcon boxSize={5} ml="16px" color="#9698AB" onClick={onOpen} />
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} size="4xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="var(--purple)">Editar conta</ModalHeader>
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
                  value={account}
                  onChange={''}
                  onBlur={''}
                />
              </FormControl>
              <FormControl>
                <Select placeholder="Selecione a Instituição" name="institution">
                  <option value="1">Bradesco</option>
                  <option value="2">Banco do Brasil</option>
                  <option value="3">Caixa</option>
                </Select>
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
                  value={''}
                  onChange={''}
                  onBlur={''}
                />
              </FormControl>
              <FormControl>
                <Select placeholder="Selecione o tipo de conta" name="account_type">
                  <option value="1">Conta Poupança</option>
                  <option value="2">Conta Corrente</option>
                  <option value="3">Conta de Pagamentos</option>
                </Select>
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
                  value={''}
                  onChange={''}
                  onBlur={''}
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
              <Switch id="email-alerts" size="md" isChecked colorScheme="purple" />
              <FormControl display="flex" gap={2} alignItems="center">
                <FormLabel htmlFor="email-alerts" m={0}>
                  Conta Favorita
                </FormLabel>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter gap={4}>
            <Button variant="ghost" px={8} onClick={onClose}>Cancelar</Button>
            <Button colorScheme="blue" mr={3} bg="var(--purple)" px={8} disabled={''}>
              Salvar Alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
