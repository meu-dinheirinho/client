import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginPage } from './pages';

export default function App() {
  return (
    <ChakraProvider>
      <LoginPage />
    </ChakraProvider>
  );
}
