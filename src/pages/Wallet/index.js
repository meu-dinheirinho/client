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
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import { useContext, useEffect, useState } from 'react';
import {
  accountTypes, banks, initialValues, registerSchema,
} from './schemas';
import { AccountCard, FormInput, Header } from '../../components';
import WalletService from '../../services/wallet';
import { SessionContext } from '../../context/session';

export default function Wallet() {
  // context
  const { token } = useContext(SessionContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [accounts, setAccounts] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [initialData, setInitialData] = useState(initialValues);
  const [isChecked, setIsChecked] = useState(false);
  const [color, setColor] = useState('');
  const toast = useToast();

  function refresh() {
    const listAllWallet = new WalletService(token);

    listAllWallet.getAll().then(({ wallets }) => {
      setAccounts(wallets);
    }).catch(() => {
      toast({
        title: 'Erro ao buscar contas',
        status: 'error',
        duration: 5000,
      });
    });
  }

  function plainToSchema(obj) {
    return {
      ...obj,
      name: obj.name,
      account_type: obj.account_type,
      current_value: obj.current_value,
    };
  }

  function openModal(accountId) {
    if (!accountId) {
      setInitialData(initialValues);
      setIsUpdating(false);
      onOpen();
      return;
    }

    const account = accounts.find((acc) => acc.id === accountId);
    setInitialData(plainToSchema(account));
    setIsUpdating(true);

    onOpen();
  }

  function handleSwitch() {
    setIsChecked(!isChecked);
  }

  function handleCreateWallet(dataWallet) {
    const walletService = new WalletService(token);
    walletService.create(dataWallet).then(() => {
      toast({
        title: 'Conta criada com sucesso',
        status: 'success',
        duration: 5000,
      });
      onClose(onClose);
      refresh();
    });
  }

  function updateWallet(account) {
    const walletService = new WalletService(token);
    walletService.update(account).then(() => {
      onClose(onClose);
      refresh();
      setColor('');
    });
  }

  function verifyId(data) {
    if (data.id) {
      const newData = {
        ...data,
        color,
      };

      updateWallet(newData);
      setColor('');
      return;
    }

    const newData = {
      ...data,
      id_user: '',
      favorite: isChecked ? '1' : '0',
      color,
      current_value: parseFloat(data.current_value),
    };

    handleCreateWallet(newData);
    setInitialData(initialValues);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      <Header
        title="Minhas Contas"
        description="Adicione lançamentos e defina metas"
      />
      <HStack>
        <Flex flexDirection={'column'} minH={'100%'}>
          <Button
            onClick={() => openModal()}
            my={2}
            gap={3}
            variant="outline"
            bg="var(--gray-200)"
          >
            <AddIcon boxSize={3} />
            Adicionar Conta
          </Button>
          {accounts.map((account) => (
            <AccountCard
              account={account.name}
              typeAccount={account.account_type}
              institution={account.institution}
              width={'100%'}
              value1={account.current_value}
              value2={account.current_value}
              bg="rgba(81, 69, 158, 0.20)"
              border={account.color}
              onEditAccount={() => openModal(account.id)}
              key={account.id}
            />
          ))}
        </Flex>
        <Flex bg={'red.200'} width={'40%'} minH={'100%'}>
          {/* {card} */}
        </Flex>
      </HStack>

      <Formik
        initialValues={initialData}
        enableReinitialize
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          verifyId(values);
          actions.resetForm();
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
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            size="4xl"
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color="var(--purple)">
                {isUpdating ? 'Editar conta' : 'Nova conta'}
              </ModalHeader>
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
                    <Field name="institution">
                      {({ field }) => (
                        <Select
                          {...field}
                          placeholder="Selecione a instituição"
                        >
                          {banks.map((bank) => (
                            <option value={bank.value} key={bank.value}>
                              {bank.label}
                            </option>
                          ))}
                        </Select>
                      )}
                    </Field>
                    <Text fontSize={'small'} color={'red'}>
                      {errors.institution || null}
                    </Text>
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
                    <Field name="account_type">
                      {({ field }) => (
                        <Select
                          {...field}
                          placeholder="Selecione o tipo de conta"
                        >
                          {accountTypes.map((type) => (
                            <option value={type.value} key={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </Select>
                      )}
                    </Field>
                    <Text fontSize={'small'} color={'red'}>
                      {errors.account_type || null}
                    </Text>
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
                    <RadioGroup
                      onChange={setColor}
                      value={color || values.color}
                    >
                      <Stack spacing={5} direction="row">
                        <Radio colorScheme="orange" value="#F9896B">
                          Laranja
                        </Radio>
                        <Radio colorScheme="cyan" value="#84E8F4">
                          Azul
                        </Radio>
                        <Radio colorScheme="purple" value="#605DEC">
                          Roxo
                        </Radio>
                        <Radio colorScheme="red" value="#EA5A47">
                          Vermelho
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Flex>
                </HStack>
                <Stack align="center" direction="row">
                  <Switch
                    id="email-alerts"
                    size="md"
                    colorScheme="purple"
                    name="favorite"
                    onChange={() => handleSwitch()}
                  />
                  <FormControl display="flex" gap={2} alignItems="center">
                    <FormLabel htmlFor="email-alerts" m={0}>
                      Favoritar conta?
                    </FormLabel>
                  </FormControl>
                </Stack>
              </ModalBody>

              <ModalFooter gap={4}>
                <Button variant="ghost" px={8} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={handleSubmit}
                  bg="var(--purple)"
                  px={8}
                  loadingText="Loading"
                  spinnerPlacement="start"
                  disabled={isSubmitting}
                >
                  {isUpdating ? 'Alterar Modificações' : 'Salvar'}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Formik>
    </div>
  );
}
