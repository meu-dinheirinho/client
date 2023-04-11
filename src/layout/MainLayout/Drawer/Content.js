import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
  useDisclosure,
  Button,
  Center,
  Text,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';

import { User } from '../../../components';
import styles from './drawer.module.css';

export function DrawerSideContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button w="100%" h="100%" ref={btnRef} onClick={onOpen} variant="unstyled">
        <User url="https://avatars.githubusercontent.com/u/73307404?v=4" color="var(--orange)" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton /> */}
          {/* <DrawerHeader> </DrawerHeader> */}

          <DrawerBody fontFamily="var(--primary)" position="relative">
            <svg className={styles.fisrtSvg} width="351" height="250" viewBox="0 0 351 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M309.292 -257.197C455.178 -233.558 554.278 -96.1305 530.638 49.7551C506.999 195.641 389.282 364.123 254.087 140.996C118.892 -82.1301 -20.6395 71.3857 3 -74.5C26.6394 -220.386 163.406 -280.837 309.292 -257.197Z" fill="#D8D2FF" />
            </svg>
            <Center mb="36px">
              <Flex direction="column">
                <User url="https://avatars.githubusercontent.com/u/73307404?v=4" color="var(--orange)" />
                <Text textAlign="center" fontSize="16px" fontWeight="var(--bold)" color="var(--purple-700)">Pedro</Text>
                <Text textAlign="center" fontSize="14px" fontWeight="var(--regular)" color="var(--gray-600)">Developer</Text>
              </Flex>
            </Center>
            <Flex direction="row">
              <Box>
                <Text textAlign="center" fontSize="16px" fontWeight="var(--bold)" color="var(--purple-700)">4</Text>
                <Text textAlign="center" fontSize="14px" fontWeight="var(--regular)" color="var(--gray-600)">Metas</Text>
              </Box>
              <Spacer />
              <Box>
                <Text textAlign="center" fontSize="16px" fontWeight="var(--bold)" color="var(--purple-700)">3</Text>
                <Text textAlign="center" fontSize="14px" fontWeight="var(--regular)" color="var(--gray-600)">Metas</Text>
                <Text textAlign="center" fontSize="14px" fontWeight="var(--regular)" color="var(--gray-600)">Finalizadas</Text>
              </Box>
              <Spacer />
              <Box>
                <Text textAlign="center" fontSize="16px" fontWeight="var(--bold)" color="var(--purple-700)">2</Text>
                <Text textAlign="center" fontSize="14px" fontWeight="var(--regular)" color="var(--gray-600)">Cartões</Text>
              </Box>
            </Flex>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
