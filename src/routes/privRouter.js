import { Route, Routes } from 'react-router-dom';
// pages
import {
  ComponentPage, Wallet, MyWalletComponent, NotFoundPage,
} from '../pages';
// layout
import { MainLayout } from '../layout';
import RedirectRouter from './RedirectRouter';

export default function PrivRouter() {
  return (
    <MainLayout>
      <Routes>
        <Route path={''} element={(<RedirectRouter path={'dashboard'} />)} />
        <Route path={'dashboard'} element={(<ComponentPage />)} />
        <Route path={'book-entry'} element={(<ComponentPage />)} />
        <Route path={'my-wallet'} element={(<MyWalletComponent />)} />
        <Route path={'accounts'} element={(<Wallet />)} />
        {/* 404 */}
        <Route path={'*'} element={(<NotFoundPage />)} />
      </Routes>
    </MainLayout>
  );
}
