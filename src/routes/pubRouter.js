/* eslint-disable max-len */
import { Route, Routes } from 'react-router-dom';
// pages
import { LoginPage, RecoveryPage, RegisterPage } from '../pages';
// style
import RedirectRouter from './RedirectRouter';
import { LayoutLogin } from '../layout';

export default function TenantPubRouter() {
  return (
    <LayoutLogin>
      <Routes>
        {/* login stack */}
        <Route path={'login'} element={(<LoginPage />)} />
        <Route path={'register'} element={(<RegisterPage />)} />
        <Route path={'recovery'} element={(<RecoveryPage />)} />
        {/* request recovery password */}
        {/* confirm recovery password */}
        {/* 404 */}
        <Route path={'*'} element={(<RedirectRouter path={'login'} />)} />
      </Routes>
    </LayoutLogin>
  );
}
