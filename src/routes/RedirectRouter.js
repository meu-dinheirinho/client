import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectRouter({
  path,
}) {
  // navigation
  const navigate = useNavigate();
  // on initialize, redirect to login
  useEffect(() => {
    navigate(path);
  }, []);
  return null;
}

export default RedirectRouter;
