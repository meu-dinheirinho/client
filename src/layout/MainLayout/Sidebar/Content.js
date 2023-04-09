import {
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Divider,
  Box,
  Grid,
  GridItem,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { EXTRA_MENU_ITEMS, MENU_ITEMS } from '../../../constants/menu.app';
import { Logo } from '../../../components';
import { SidebarItem } from './SidebarItem';

export function SidebarContent({
  menuItems,
  onClose,
  ...rest
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 52 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Grid
        h={'full'}
        templateAreas={`"header"
                        "nav"
                        "footer"`}
        gridTemplateRows={'80px 1fr 170px'}
      >
        <GridItem area={'header'}>
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
            <Text fontSize="2xl">
              <Logo />
            </Text>
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
          </Flex>
        </GridItem>
        <GridItem area={'nav'}>
          {MENU_ITEMS.map((link) => (
            <SidebarItem
              key={link.name}
              icon={link.icon}
              path={link.path}
            >
              {link.name}
            </SidebarItem>
          ))}
          <Flex h="20" alignItems="center">
            <Divider />
          </Flex>
        </GridItem>
        <GridItem area={'footer'}>
          {EXTRA_MENU_ITEMS.map((link) => (
            <SidebarItem
              key={link.name}
              icon={link.icon}
              path={link.path}
            >
              {link.name}
            </SidebarItem>
          ))}
          <Flex h="20" alignItems="center" mx="8" justifyContent="center">
            <Button
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: 'none' }}
              w="fit-content"
              {...rest}
            >
              {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
