import {
  // Box,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { activeStyles } from './commons';
import Details from './Details';
import styles from './sidebar.module.css';

export function SidebarItem({
  icon,
  children,
  path,
  ...rest
}) {
  const route = useLocation();
  const isActive = route.pathname.replace('/', '') === path;

  return (
    <Link
      to={path}
      as={NavLink}
      position={'relative'}
      style={{ textDecoration: 'none', fontSize: '0.875rem' }}
      color={'var(--gray-600)'}
      _focus={{ boxShadow: 'none' }}
      _activeLink={isActive ? activeStyles : null}
    >
      <Flex
        align="center"
        py="1"
        role="group"
        cursor="pointer"
        _hover={isActive ? {
          color: 'var(--purple-900)',
        } : {
          color: 'var(--purple-200)',
        }}
        {...rest}
      >
        <div className={isActive ? styles.detailsMenuActive : styles.detailsMenuNormal}>
          <Details color={'var(--purple-900)'} />
        </div>
        {icon && (
          <Icon
            mr="4"
            fontSize="20"
            color={isActive ? 'var(--purple-900)' : 'var(--gray-600)'}
            _groupHover={isActive ? {
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
