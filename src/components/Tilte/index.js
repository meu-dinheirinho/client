import { Box, useColorModeValue } from '@chakra-ui/react';
import styles from './styles.module.css';

export default function Title({
  // title page
  title,
  // description page
  description,
}) {
  return (
    <Box md={{ '.title': { color: useColorModeValue('red', 'white') } }}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </Box>
  );
}
