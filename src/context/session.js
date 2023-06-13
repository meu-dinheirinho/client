import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { getCookieToken, setCookieToken } from '../services';

// create a context
export const SessionContext = createContext();

// Crie um provedor para o contexto
export function ContextProvider({ children }) {
  const [data, setData] = useState(() => {
    const storedData = getCookieToken() || { token: '', userId: '' };
    return storedData;
  });

  // Função para atualizar os valores do contexto
  const updateData = (newValues) => {
    setData((prevData) => ({
      ...prevData,
      ...newValues,
    }));
  };

  const contextValue = useMemo(() => ({ ...data, updateData }), [data]);

  useEffect(() => {
    setCookieToken(JSON.stringify(data));
  }, [data]);

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
}
