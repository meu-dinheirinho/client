import {
  useContext,
  useEffect, useRef, useState,
} from 'react';
import {
  Button, Flex, Grid, GridItem, HStack, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
  ModalOverlay, Stack, useDisclosure, useToast,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import { AddIcon } from '@chakra-ui/icons';
import styles from './styles.module.css';
import {
  CreditCard,
  FormInput,
  FormSelectInput,
  Header,
} from '../../components';
import { sortByProperty } from '../../utils';
import { creditCardSchema, initialValues } from './schemas';
import { CARD_NUMBER_PATTERN } from '../../constants';
import useLoading from '../../hooks/loading';
import { SessionContext } from '../../context/session';
import { CreditCardService } from '../../services';
// //  TODO: REMOVER
// const mockedData = [
//   {
//     id: 1,
//     description: 'Cartão 1',
//     cardNumber: '5477 5125 3556 3388',
//     flag: 'master',
//     invoiceClosingDate: '',
//     invoiceDueDate: '',
//     limit: 0,
//     isActive: true,
//   },
//   {
//     id: 2,
//     description: 'Cartão 2',
//     cardNumber: '4024 0071 8405 5464',
//     flag: 'visa',
//     invoiceClosingDate: '',
//     invoiceDueDate: '',
//     limit: 0,
//     isActive: false,
//   },
//   {
//     id: 3,
//     description: 'Cartão 3',
//     cardNumber: '5477 5125 3556 3388',
//     flag: 'master',
//     invoiceClosingDate: '',
//     invoiceDueDate: '',
//     limit: 0,
//     isActive: false,
//   },
//   {
//     id: 4,
//     description: 'Cartão 4',
//     cardNumber: '4024 0071 8405 5464',
//     flag: 'visa',
//     invoiceClosingDate: '',
//     invoiceDueDate: '',
//     limit: 0,
//     isActive: false,
//   },
// ];

export default function MyWalletComponent() {
  const [accountList, setAccountList] = useState([]);
  const [brandOptionsList, setBrandOptionsList] = useState([]);
  const [loading, start, done] = useLoading();
  // hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const { token } = useContext(SessionContext);

  // TODO: ALTERAR PARA REQUISIÇÃO
  // const refresh = useCallback((data) => {
  //   setAccountList(data);
  // }, []);

  // useEffect(() => {
  //   refresh(mockedData);
  // }, [refresh]);

  useEffect(() => {
    const optionsList = CARD_NUMBER_PATTERN.map((item) => ({
      label: item.name,
      value: item.name,
    }));

    setBrandOptionsList(optionsList);
  }, []);

  function handleSelectCard(accountId) {
    setAccountList((prev) => {
      const newData = prev.map((item) => ({
        ...item,
        isActive: item.id === accountId,
      }));
      return sortByProperty(newData, 'isActive');
    });
  }

  function store(data) {
    start();
    const creditCardService = new CreditCardService(token);
    creditCardService.store(data).then(() => {
      toast({
        title: 'Tudo Certo',
        description: 'Cartão salvo com sucesso',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }).catch(() => {
      toast({
        title: 'Ocorre um problema ao salvar o cartão',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    });
    done();
    onClose();
  }

  function update(data) {
    start();
    const creditCardService = new CreditCardService(token);
    creditCardService.store(data).then(() => {
      toast({
        title: 'Tudo Certo',
        description: 'Cartão salvo com sucesso',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }).catch(() => {
      toast({
        title: 'Ocorre um problema ao salvar o cartão',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    });
    done();
    onClose();
  }

  function handleSubmitData(data) {
    return data.id ? update(data) : store(data);
  }

  return (
    <div className={styles.container}>
      <Header
        title={'Minha Carteira'}
        description={'Veja o status  dos seus cartões'}
        searchDescription={'Pesquise na carteira'}
      />
      <Grid
        flex="1"
        overflowY="auto"
        templateRows={'4fr auto'}
        templateColumns={'1fr 3fr'}
        gap={4}
      >
        <GridItem>
          <CreditCard
            accounts={accountList}
            onSelectedCard={(accountId) => handleSelectCard(accountId)}
          />
        </GridItem>
        <GridItem rowSpan={2} />
        <GridItem>
          <Flex align={'center'} justify={'center'} height={'100%'}>
            <Button leftIcon={<AddIcon />} onClick={onOpen}>
              Adicionar cartão
            </Button>
          </Flex>
        </GridItem>
      </Grid>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        size={'4xl'}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo Cartão</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex flex={1.5} align={'center'} justify={'center'}>
              <Stack spacing={10} width={'100%'}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={creditCardSchema}
                  onSubmit={(values) => {
                    handleSubmitData(values);
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
                    <>
                      <Stack spacing={10}>
                        <Grid templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={3}>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'text'}
                              placeholder={'Descrição'}
                              variant={'filled'}
                              name={'description'}
                              id={'description'}
                              value={values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.description && errors.description}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Numero do cartão'}
                              variant={'filled'}
                              name={'cardNumber'}
                              id={'cardNumber'}
                              value={values.cardNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.cardNumber && errors.cardNumber}
                            />
                          </GridItem>
                          <GridItem>
                            <FormSelectInput
                              placeholder="Selecione uma bandeira"
                              variant={'filled'}
                              size={'lg'}
                              name={'flag'}
                              id={'flag'}
                              value={values.flag}
                              options={brandOptionsList}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.flag && errors.flag}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Limite'}
                              variant={'filled'}
                              name={'limit'}
                              id={'limit'}
                              value={values.limit}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.limit && errors.limit}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Dia do fechamento'}
                              variant={'filled'}
                              name={'invoiceClosingDate'}
                              id={'invoiceClosingDate'}
                              value={values.invoiceClosingDate}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.invoiceClosingDate && errors.invoiceClosingDate}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Dia do vencimento'}
                              variant={'filled'}
                              name={'invoiceDueDate'}
                              id={'invoiceDueDate'}
                              value={values.invoiceDueDate}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.invoiceDueDate && errors.invoiceDueDate}
                            />
                          </GridItem>
                        </Grid>
                      </Stack>
                      <ModalFooter>
                        <HStack spacing={3}>
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
                            Salvar
                          </Button>
                          <Button
                            className={styles.button}
                            size={'lg'}
                            onClick={onClose}
                          >
                            Cancelar
                          </Button>
                        </HStack>
                      </ModalFooter>
                    </>
                  )}
                </Formik>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
