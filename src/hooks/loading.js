import { useCallback, useState, useRef } from 'react';

export default function useLoading() {
  // ref to timeout function
  const timeoutRef = useRef();
  // state of loading
  const [loading, setLoading] = useState(false);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = 0;
  }, []);

  const start = useCallback((timeout) => {
    // set timeout
    const t = timeout || 3000;
    // set loading
    setLoading(true);
    // clear and set timeout
    clear();
    const tid = window.setTimeout(() => {
      setLoading(false);
    }, t);
    // set timeout ref
    timeoutRef.current = tid;
  }, [clear]);

  const done = useCallback(() => {
    setLoading(false);
    clear();
  }, [clear]);

  return [
    loading,
    start,
    done,
  ];
}
