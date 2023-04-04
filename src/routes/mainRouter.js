/* eslint-disable react/jsx-fragments */
import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SessionContext } from '../context';
// page
import { NotFoundPage } from '../pages';
// routes
import PubRouter from './pubRouter';
// style
import styles from './styles.module.css';

/**
 * TenantSwitcher
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
          <Route path={'*'} element={(<NotFoundPage />)()} />
        ) : (
          <Route path={'/*'} element={(<PubRouter />)} />
        )}
      </Routes>
    </div>
  );
}
