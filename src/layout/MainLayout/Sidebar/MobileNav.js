import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { Logo } from '../../../components';

export default function MobileNav({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box fontSize="2xl" ml="8">
        <Logo />
      </Box>
    </Flex>
  );
}
