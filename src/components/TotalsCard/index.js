import {
  Box, Circle, Flex, Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from './styles.module.css';

export default function TotalsCard() {
  return (
    <Box className={styles.totals} border="1px solid var(--gray-200)" borderRadius="10" bg="white">
      <Flex>
        <Circle size="45px" bg="tomato" mb="24" color="white">
          icone
        </Circle>
        <Box ml="20px">
          <Text fontSize={12} className={styles.totalsTitle}>Total de despeza</Text>
          <Text fontSize={16} className={styles.totalsSubTitle}>R$ 1.900,00</Text>
        </Box>
      </Flex>
    </Box>
  );
}
