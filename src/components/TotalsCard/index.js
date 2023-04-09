import {
  Box, Center, Circle, Flex, Spacer, Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from './styles.module.css';

import bars from '../../images/bars.png';
import triangle from '../../images/triangle.png';

export default function TotalsCard({
  title, value, color, url, progress, percentage,
}) {
  return (
    <Box className={styles.totals} border="1px solid var(--gray-200)" borderRadius="10">
      <Flex mb="24px" h="45px">
        <Circle size="45px" bg={color} mb="24" color="white">
          <img src={url} alt="" />
        </Circle>
        <Box ml="20px">
          <Text fontSize={12} className={styles.totalsTitle}>{title}</Text>
          <Text fontSize={16} className={styles.totalsSubTitle}>R$ {value}</Text>
        </Box>
      </Flex>
      <div className={styles.progress}>
        <Box w={`${progress}%`} bg="var(--purple-900)" h="100%" borderRadius="5" />
      </div>
      <Center mt="24px">
        <Center gap={2}>
          <img src={bars} alt="" className={styles.imagesTotals} />
          <Text fontSize="15px" color="var(--purple-900)">{percentage}%</Text>
        </Center>
        <Spacer />
        <img src={triangle} alt="" className={styles.imagesTotals} />
      </Center>
    </Box>
  );
}
