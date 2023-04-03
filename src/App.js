import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainRouter from './routes/mainRouter';

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <MainRouter />
      </ChakraProvider>
    </BrowserRouter>
  );
}
