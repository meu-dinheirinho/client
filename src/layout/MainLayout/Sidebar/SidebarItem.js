import {
  Box,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { activeStyles } from './commons';
import Details from './Details';

export function SidebarItem({
  icon,
  children,
  path,
  ...rest
}) {
  const route = useLocation();

  return (
    <Link
      to={path}
      as={NavLink}
      position={'relative'}
      style={{ textDecoration: 'none', fontSize: '0.875rem' }}
      color={'var(--gray-600)'}
      _focus={{ boxShadow: 'none' }}
      _activeLink={route.pathname.replace('/', '') === path ? activeStyles : null}
      _active={route.pathname.replace('/', '') === path ? activeStyles : null}
    >
      <Flex
        align="center"
        py="1"
        role="group"
        cursor="pointer"
        _hover={route.pathname.replace('/', '') === path ? {
          color: 'var(--purple-900)',
        } : {
          color: 'var(--purple-200)',
        }}
        {...rest}
      >
        <Box mr={2}>
          <Details color={route.pathname.replace('/', '') === path ? 'var(--purple-900)' : 'white'} />
        </Box>
        {icon && (
          <Icon
            mr="4"
            fontSize="20"
            color={route.pathname.replace('/', '') === path ? 'var(--purple-900)' : 'var(--gray-600)'}
            _groupHover={route.pathname.replace('/', '') === path ? {
              color: 'var(--purple-900)',
            } : {
              color: 'var(--purple-200)',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
}
