import React from 'react';
import {
  Box,
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
      my={3}
      bg={useColorModeValue('white', 'gray.900')}
      minH="90vh"
    >
      <Flex alignItems={'center'} justifyContent={'start'}>
        <Logo />
      </Flex>
      <Box flex={1}>
        {children}
      </Box>
      <Flex h={'3vh'} alignItems="center" justifyContent="end">
        <Text
          onClick={toggleColorMode}
          w="fit-content"
        >
          {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
        </Text>
      </Flex>
    </Stack>
  );
}
