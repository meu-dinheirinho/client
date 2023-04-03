import React from 'react';

// create a context
const SessionContext = React.createContext({
  token: '',
  version: '',
});

export { SessionContext };
