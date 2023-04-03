/* eslint-disable react/jsx-fragments */
import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SessionContext } from '../context';
// routes
import PubRouter from './pubRouter';
// style
import './styles.module.css';
import { NotFoundPage } from '../pages';

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
    <div className={'container'}>
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
