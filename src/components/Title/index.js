import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import styles from './styles.module.css';

export default function Title({
  // title page
  title,
  // description page
  description,
}) {
  return (
    <Box>
      <Text color={useColorModeValue('#51459E', '#ffffff')} className={styles.title}>{title}</Text>
      <Text color={useColorModeValue('#9A9A9A', '#ffffff')} className={styles.description}>{description}</Text>
    </Box>
  );
}
