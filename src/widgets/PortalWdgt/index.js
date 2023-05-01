import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function PortalWdgt({ id, children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    children,
    document.querySelector(`#${id}`),
  );
}
