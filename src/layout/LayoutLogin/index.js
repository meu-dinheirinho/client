import React from 'react';
import {
  Flex,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import { Logo } from '../../components';
// styles

export default function LayoutLogin({
  children,
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      px={8}
      bg={useColorModeValue('white', 'gray.900')}
      h={'100vh'}
    >
      <Flex mt={3} alignItems={'center'} justifyContent={'space-between'}>
        <Logo />
        <Text
          onClick={toggleColorMode}
          w="fit-content"
        >
          {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
        </Text>
      </Flex>
      <Flex flex={1} alignItems={'center'} justifyContent={'center'}>
        {children}
      </Flex>
    </Stack>
  );
}
