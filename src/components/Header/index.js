import { Flex } from '@chakra-ui/react';
import Title from '../Title';
import BoxSearch from './boxSearch';

export default function Header({
  // page title
  title,
  // page description
  description,
  //
  searchDescription,
}) {
  return (
    <Flex justify={'space-between'} wrap={'wrap'}>
      <Title title={title} description={description} />
      <BoxSearch searchDescription={searchDescription} />
    </Flex>
  );
}
