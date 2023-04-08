import { Route, Routes } from 'react-router-dom';
// pages
import {
  ComponentPage, NotFoundPage,
} from '../pages';
// layout
import { MainLayout } from '../layout';

export default function PrivRouter() {
  return (
    <MainLayout>
      <Routes>
        {/* login stack */}
        <Route path={'dashboard'} element={(<ComponentPage />)} />
        <Route path={'book-entry'} element={(<ComponentPage />)} />
        <Route path={'my-wallet'} element={(<ComponentPage />)} />
        <Route path={'accounts'} element={(<ComponentPage />)} />
        {/* 404 */}
        <Route path={'*'} element={(<NotFoundPage />)} />
      </Routes>
    </MainLayout>
  );
}
