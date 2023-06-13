import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainRouter from './routes/mainRouter';
import { ContextProvider } from './context/session';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <MainRouter />
        </ChakraProvider>
      </BrowserRouter>
    </ContextProvider>
  );
}
