import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

export default function Wallet() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen} gap={3}><AddIcon boxSize={3} />Adicionar Conta</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            <Input placeholder="Nome da conta" />
            <Select placeholder="Instituição">
              <option value="1">Bradesco</option>
              <option value="2">Banco do Brasil</option>
              <option value="3">Caixa</option>
            </Select>
          </ModalBody>

          <ModalFooter gap={4}>
            <Button variant="ghost">Cancelar</Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
