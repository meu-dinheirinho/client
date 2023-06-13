import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { removeCookies } from '../services';

function NoRouter() {
  // param
  const location = useLocation();
  // clean cookie
  removeCookies();

  // on initialize, redirect to login
  useEffect(() => {
    window.location.href = location.pathname;
  }, []);
  return null;
}

export default NoRouter;
