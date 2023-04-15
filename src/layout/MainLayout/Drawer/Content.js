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
  Icon,
} from '@chakra-ui/react';
import React from 'react';

import { TbMessage } from 'react-icons/tb';
import { VscBell } from 'react-icons/vsc';
import { FaRegUser } from 'react-icons/fa';

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

          <DrawerBody fontFamily="var(--primary)" position="relative" pb="0" overflow="hidden" pt="23px">
            <svg className={styles.topSvg} width="351" height="250" viewBox="0 0 351 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M309.292 -257.197C455.178 -233.558 554.278 -96.1305 530.638 49.7551C506.999 195.641 389.282 364.123 254.087 140.996C118.892 -82.1301 -20.6395 71.3857 3 -74.5C26.6394 -220.386 163.406 -280.837 309.292 -257.197Z" fill="#D8D2FF" />
            </svg>

            <Center mb="40px">
              <Button className={styles.drawerInternalButtons} variant="unstyled">
                <Icon as={TbMessage} />
              </Button>
              <Spacer />
              <Center gap={2}>
                <Button variant="unstyled" className={styles.drawerInternalButtons}> <Icon as={VscBell} /></Button>
                <Button variant="unstyled" className={styles.drawerInternalButtons}> <Icon as={FaRegUser} /></Button>
              </Center>
            </Center>

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
            <Box bg="var(--purple)" h="100%" mt="40px" position="relative" className={styles.boxPurple} overflow="hidden" p="27px">
              <svg className={styles.topSvg} width="94" height="90" viewBox="0 0 94 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M86.0636 84.2033C21.962 64.7026 -14.194 -3.07045 5.30679 -67.1719C24.8076 -131.273 87.949 -199.8 135.104 -91.3283C182.26 17.1431 256.94 -60.6549 237.439 3.44665C217.938 67.5481 150.165 103.704 86.0636 84.2033Z" fill="white" />
              </svg>
              <Flex bg="var(--orange)" pt="19px" pb="10px" pl="16px" pr="12px" color="white" position="relative" borderRadius={10} gap="6px" direction="column" overflow="hidden">
                <svg className={styles.topSvg} width="158" height="93" viewBox="0 0 158 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M121.673 -88.8287C171.781 -73.5851 200.043 -20.6077 184.8 29.4998C169.556 79.6074 120.199 133.174 83.3385 48.3827C46.4777 -36.4084 -11.8991 24.4055 3.34451 -25.702C18.5881 -75.8095 71.5656 -104.072 121.673 -88.8287Z" fill="white" fillOpacity="0.1" />
                </svg>
                <Text fontWeight="var(--bold)" fontSize="16px">Seja PRO!</Text>
                <Text fontWeight="var(--regular)" fontSize="12px">Atualize para o pro max para obter benefícios adicionais.</Text>
                <Text align="end" fontWeight="var(--regular)" fontSize="10px">Atualize agora!</Text>
                <svg className={styles.bottomSvg} width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M-13.6564 4.25563C36.4511 19.4992 64.7139 72.4767 49.4704 122.584C34.2268 172.692 -15.1302 226.258 -51.991 141.467C-88.8518 56.676 -147.229 117.49 -131.985 67.3823C-116.741 17.2748 -63.7639 -10.9879 -13.6564 4.25563Z" fill="white" />
                </svg>
              </Flex>
              <svg className={styles.bottomSvg} width="176" height="115" viewBox="0 0 176 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0636 233.203C-43.038 213.703 -79.194 145.93 -59.6932 81.8281C-40.1924 17.7266 22.949 -50.7998 70.1043 57.6717C117.26 166.143 191.94 88.3451 172.439 152.447C152.938 216.548 85.1651 252.704 21.0636 233.203Z" fill="white" fillOpacity="0.1" />
              </svg>
            </Box>
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
