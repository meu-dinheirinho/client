import {
  useCallback,
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
import useLoading from '../../hooks/loading';
import { SessionContext } from '../../context/session';
import { CreditCardService, WalletService } from '../../services';

export default function MyWalletComponent() {
  const [walletsList, setWalletsList] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [loading, start, done] = useLoading();
  // hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const { token, userId } = useContext(SessionContext);

  const refresh = useCallback(() => {
    const creditCardService = new CreditCardService(token);
    creditCardService.getAll().then(({ creditCards }) => {
      setCardList(creditCards);
    }).catch(() => {
      toast({
        title: 'Erro ao buscar Cartões',
        status: 'error',
        duration: 5000,
      });
    });
  });

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const listAllWallet = new WalletService(token);
    listAllWallet.getAll().then(({ wallets }) => {
      const list = wallets.map((item) => ({ label: item.name, value: item.id }));
      setWalletsList(list);
    }).catch(() => {
      toast({
        title: 'Erro ao buscar contas',
        status: 'error',
        duration: 5000,
      });
    });
  }, []);

  function handleSelectCard(accountId) {
    setCardList((prev) => {
      const newData = prev.map((item) => ({
        ...item,
        isActive: item.id === accountId,
      }));
      return sortByProperty(newData, 'isActive');
    });
  }

  function store(data) {
    const parseData = {
      ...data,
      id_wallet: Number(data.id_wallet),
    };

    start();
    const creditCardService = new CreditCardService(token);
    creditCardService.store(parseData, userId).then(() => {
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
            accounts={cardList}
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
                            <FormSelectInput
                              placeholder="Selecione uma conta"
                              variant={'filled'}
                              size={'lg'}
                              name={'id_wallet'}
                              id={'id_wallet'}
                              value={values.id_wallet}
                              options={walletsList}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.id_wallet && errors.id_wallet}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'text'}
                              placeholder={'Descrição'}
                              variant={'filled'}
                              name={'alias'}
                              id={'alias'}
                              value={values.alias}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.alias && errors.alias}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Numero do cartão'}
                              variant={'filled'}
                              name={'last_four_digits'}
                              id={'last_four_digits'}
                              value={values.last_four_digits}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.last_four_digits && errors.last_four_digits}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Limite'}
                              variant={'filled'}
                              name={'limit_value'}
                              id={'limit_value'}
                              value={values.limit_value}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.limit_value && errors.limit_value}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Dia do fechamento'}
                              variant={'filled'}
                              name={'closing_date'}
                              id={'closing_date'}
                              value={values.closing_date}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.closing_date && errors.closing_date}
                            />
                          </GridItem>
                          <GridItem>
                            <FormInput
                              size={'lg'}
                              type={'number'}
                              placeholder={'Dia do vencimento'}
                              variant={'filled'}
                              name={'invoice_date'}
                              id={'invoice_date'}
                              value={values.invoice_date}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={touched.invoice_date && errors.invoice_date}
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
