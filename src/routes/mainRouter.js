import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SessionContext } from '../context';
// routes
import PrivRouter from './privRouter';
// style
import styles from './styles.module.css';
import PubRouter from './pubRouter';

/**
 * MainSwitcher
 */
export default function MainRouter() {
  // context
  const { token } = useContext(SessionContext);
  // internal state
  // eslint-disable-next-line no-unused-vars
  const [logged, setLogged] = useState(!!token);

  return (
    <div className={styles.container}>
      <Routes>
        {logged ? (
          <Route path={'/*'} element={(<PrivRouter />)} />
        ) : (
          <Route path={'/*'} element={(<PubRouter />)} />
        )}
      </Routes>
    </div>
  );
}
