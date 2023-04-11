import {
  Center, Circle, Img,
} from '@chakra-ui/react';
import React from 'react';
import styles from './styles.module.css';

export default function User({ url, color }) {
  return (
    <Center position="relative" w="105px" h="105px">
      <Circle size="20px" bg={color} border="4px solid white" position="absolute" top={6} left={5} zIndex={100} />
      <Img src={url} alt="" width="55px" borderRadius={50} position="absolute" />
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="90px" height="90px" className={styles.svg}>
        <circle className={styles.svgCircle} cx="45" cy="45" r="40" strokeLinecap="round" stroke={color} />
      </svg>
    </Center>
  );
}
