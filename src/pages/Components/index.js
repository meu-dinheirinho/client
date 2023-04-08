import React from 'react';
import { Flex } from '@chakra-ui/react';
import styles from './styles.module.css';
import { AccountCard, MovementCard, TotalsCard } from '../../components';

export default function ComponentPage() {
  return (
    <div className={styles.teste}>
      <Flex direction="column" gap={3}>
        type = 1
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="in" type={1} />
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="out" type={1} />
        type = 2
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="in" type={2} />
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="out" type={2} date="" />

        type = 3
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="in" type={3} date="17/02/2023" />
        <MovementCard value="80,90" description="Adobe Photo Shop" typeMovement="mensal" Movement="out" type={3} date="17/02/2023" />
      </Flex>
      <Flex direction="column" gap={3}>
        <AccountCard account="X" typeAccount="Poupança" institution="AB" value1="200,00" value2="1.200,50" bg="rgba(249, 137, 107, 0.27)" border="#F9896B" />
        <AccountCard account="X" typeAccount="Poupança" institution="AB" value1="200,00" value2="1.200,50" bg="rgba(81, 69, 158, 0.20)" border="#51459E" />
      </Flex>
      <Flex direction="column" gap={3}>
        <TotalsCard />
      </Flex>
    </div>
  );
}
