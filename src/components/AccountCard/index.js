import {
  Box, Flex, Spacer, Text,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditIcon } from '@chakra-ui/icons';
import React from 'react';
import styles from './styles.module.css';

export default function AccountCard({
  account, typeAccount, institution, value1, value2, bg, border,
}) {
  return (
    <Flex bg={bg} border="1px solid" borderColor={border} borderRadius="10" className={styles.AccountBox} direction="row">
      <Flex direction="column">
        <Flex className={styles.AccountContent} direction="column">
          <Text fontSize="16px" className={styles.AccountTitle}>CONTA {account}</Text>
          <Text fontSize="16px" mb="26px" className={styles.AccountText}>{typeAccount} - instituição {institution}</Text>
        </Flex>
        <Flex mt="24px">
          <Box>
            <Text fontSize="16px" className={styles.AccountTitle}>Saldo</Text>
            <Text fontSize="16px" className={styles.AccountText}>R$ {value1}</Text>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize="16px" className={styles.AccountTitle}>Saldo Previsto</Text>
            <Text fontSize="16px" className={styles.AccountText}>R$ {value2}</Text>
          </Box>
        </Flex>
      </Flex>
      <Box>
        <EditIcon boxSize={5} ml="16px" color="#9698AB" />
      </Box>
    </Flex>
  );
}
