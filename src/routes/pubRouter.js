import { Route, Routes, useNavigate } from 'react-router-dom';
// pages
import {
  LoginPage, RecoveryPage, RegisterPage, ComponentPage,
} from '../pages';
// style
import RedirectRouter from './RedirectRouter';
import { LayoutLogin } from '../layout';
import { REDIRECT_LOGIN } from '../constants/others';

export default function PubRouter({ onSuccess }) {
  // navigation
  const navigate = useNavigate();

  function handleLogin(token, userId) {
    console.log('>>>>>>', token, userId);
    if (onSuccess) onSuccess(token, userId);
  }

  function handleRegister() {
    navigate(REDIRECT_LOGIN);
  }

  return (
    <LayoutLogin>
      <Routes>
        {/* login stack */}
        <Route path={'login'} element={(<LoginPage onSuccess={(token, userId) => handleLogin(token, userId)} />)} />
        <Route path={'register'} element={(<RegisterPage onRegister={() => handleRegister()} />)} />
        <Route path={'recovery'} element={(<RecoveryPage />)} />
        <Route path={'components'} element={(<ComponentPage />)} />
        {/* request recovery password */}
        {/* confirm recovery password */}
        {/* 404 */}
        <Route path={'*'} element={(<RedirectRouter path={'login'} />)} />
      </Routes>
    </LayoutLogin>
  );
}
