import React, { useContext, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { SessionContext } from '../context';
// routes
import PrivRouter from './privRouter';
// style
import styles from './styles.module.css';
import PubRouter from './pubRouter';
import { setCookieToken } from '../services/cookies';
import { REDIRECT_ZERO_PATH } from '../constants/others';

/**
 * MainSwitcher
 */
export default function MainRouter() {
  // navigation
  const navigate = useNavigate();
  // context
  const { token, updateData } = useContext(SessionContext);
  // internal state
  const [logged, setLogged] = useState(!!token);

  function login(tkn, userId) {
    // set to cookie
    setCookieToken(tkn);
    // set like logged
    setLogged(true);
    //
    updateData({
      token: tkn,
      userId,
      version: 'v0',
    });
    // navigate
    navigate(REDIRECT_ZERO_PATH);
  }

  return (
    <div className={styles.container}>
      <Routes>
        {logged ? (
          <Route path={'/*'} element={(<PrivRouter />)} />
        ) : (
          <Route path={'/*'} element={(<PubRouter onSuccess={(tkn, userId) => login(tkn, userId)} />)} />
        )}
      </Routes>
    </div>
  );
}
