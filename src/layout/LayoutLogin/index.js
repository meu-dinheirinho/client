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
// styles

export default function LayoutLogin({
  children,
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      px={8}
      bg={useColorModeValue('white', 'gray.900')}
      minH="100vh"
    >
      <Box h={'90vh'} flex={1}>
        {children}
      </Box>
      <Flex h={'5vh'} alignItems="center" mx="8" justifyContent="end">
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
