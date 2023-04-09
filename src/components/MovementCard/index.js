import {
  Box,
  Center, Flex, Spacer, Square, Text, useColorModeValue,
} from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import React from 'react';
import styles from './styles.module.css';

export default function MovementCard({
  value,
  description,
  typeMovement,
  Movement = 'in',
  type,
  date,
}) {
  return (
    <Center bg={useColorModeValue('var(--white-200)', 'var(--purple-opacity)')} borderRadius="10" className={styles.box}>
      {Movement === 'out' ? (
        <Square w="38px" h="38px" mr="9px" display={type === 3 && 'none'} className={styles.out} borderRadius="3">
          <Text> </Text>
        </Square>
      ) : (
        <Square w="38px" h="38px" mr="9px" display={type === 3 && 'none'} className={styles.in} borderRadius="3">
          <Text> </Text>
        </Square>
      )}

      {type === 1 && (
        <Flex flex="1" direction="column">
          <Text fontSize="14px" className={styles.movementTitle}>R$ {value}</Text>
          <Text fontSize="12px" className={styles.movementDescription}>{description} | {typeMovement}</Text>
        </Flex>
      )}
      {type === 2 && (
        <Flex flex="1" direction="column">
          <Text fontSize="14px" className={styles.movementTitle}>{description}</Text>
          <Text fontSize="12px" className={styles.movementDescription}>R$ {value}</Text>
        </Flex>
      )}
      {type === 3 && (
        <Flex flex="1" direction="row">
          <Box>
            <Text fontSize="14px" className={styles.movementTitle}>{description}</Text>
            <Text fontSize="12px" className={styles.movementDescription}>R$ {value}</Text>
          </Box>
          <Spacer />
          <Center>
            <Text fontSize="10px" className={styles.movementDescription}>{date}</Text>
          </Center>
        </Flex>
      )}

      <Center w="32px" h="32px" ml="9px" borderRadius="50%" className={Movement === 'in' ? (styles.in) : (styles.out)}>
        {Movement === 'out' ? <ArrowDownIcon boxSize={6} color="red.500" /> : <ArrowUpIcon boxSize={6} color="green.500" />}
      </Center>
    </Center>
  );
}
