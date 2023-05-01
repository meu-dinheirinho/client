import { useRef } from 'react';
import { SearchIcon } from '@chakra-ui/icons';

import {
  Box,
  Center,
  Flex,
  Hide,
  Icon,
  Input,
  Kbd,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Show,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

export default function BoxSearch({
  // input description;
  searchDescription,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  // const keyMap = {
  //   SHIFT_K: { sequence: 'shift', action: 'k' },
  // };

  return (
    <>
      <Show below={'lg'} ref={finalRef}>
        <Box
          width={'fit-content'}
          bg={useColorModeValue('gray.200', 'gray.700')}
          padding={4}
          borderRadius={10}
          color={useColorModeValue('#9A9A9A', '#9A9A9A')}
          onClick={onOpen}
        >
          <Flex minWidth={'max-content'} alignItems={'center'} gap={1} align={'center'}>
            <Center gap={8}>
              <Icon as={SearchIcon} />
            </Center>
          </Flex>
        </Box>
      </Show>
      <Hide below={'lg'}>
        <Box
          width={'40%'}
          minWidth={'fit-content'}
          bg={useColorModeValue('gray.200', 'gray.700')}
          padding={4}
          borderRadius={10}
          color={useColorModeValue('#9A9A9A', '#9A9A9A')}
          onClick={onOpen}
        >
          <Flex minWidth={'max-content'} gap={4} align={'center'}>
            <Flex>
              <Center gap={4}>
                <Icon as={SearchIcon} />
                <Text color={useColorModeValue('#9A9A9A', '#9A9A9A')}>{searchDescription}</Text>
              </Center>
            </Flex>
            <Spacer />
            <Box>
              <Kbd>shift</Kbd> + <Kbd>k</Kbd>
            </Box>
          </Flex>
        </Box>
      </Hide>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex align={'center'} padding={1}>
              <Center gap={8}>
                <Icon as={SearchIcon} />
                <Input variant={'unstyled'} size={'lg'} placeholder={searchDescription} />
              </Center>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
