/* eslint-disable max-len */
import { Route, Routes } from 'react-router-dom';
// pages
import { LoginPage } from '../pages';
// style
import './styles.module.css';
import RedirectRouter from './RedirectRouter';

export default function TenantPubRouter() {
  return (
    <div className={'Container'}>
      <Routes>
        {/* login stack */}
        <Route path={'login'} element={(<LoginPage />)} />
        {/* request recovery password */}
        {/* confirm recovery password */}
        {/* 404 */}
        <Route path={'*'} element={(<RedirectRouter path={'login'} />)} />
      </Routes>
    </div>
  );
}
