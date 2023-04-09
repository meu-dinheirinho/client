import {
  Flex, Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from './styles.module.css';

export default function SimpleCard({ title, value }) {
  return (
    <Flex direction="column" border="1px solid var(--gray-200)" w="168px" className={styles.simple} borderRadius="10" bg="white">
      <Text fontSize={12} className={styles.simpleTitle}>{title}</Text>
      <Text fontSize={16} className={styles.simpleSubTitle}>R$ {value}</Text>
    </Flex>
  );
}
