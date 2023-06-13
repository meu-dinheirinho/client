import {
  useCallback, useContext, useEffect, useState,
} from 'react';
// services
import { useEventBus } from '../../hooks';
import { SessionContext } from '../../context/session';
import { eventsTypes } from '../../constants';

// Root Context
export default function TokenCheckerWidget({
  // children
  children,
  // propate event on invalidate jwt token
  onInvalidateToken,
}) {
  // internal state
  const [checking, setChecking] = useState(true);
  // context
  const ctx = useContext(SessionContext);
  // eventbus
  const eventBus = useEventBus();

  // invalidate token in cookie
  const invalidateCookieToken = useCallback(() => {
    if (onInvalidateToken) onInvalidateToken();
    eventBus.fire(eventsTypes.DESTROYED_JWT_TOKEN, null);
  }, [onInvalidateToken]);

  // // check if token is valid
  // const checkJwtToken = useCallback((tkn: string) => {
  //   const authService = new AuthService();
  //   authService.checkToken(tkn).then((valid): void => {
  //     if (!valid.isValid) {
  //       invalidateCookieToken();
  //     } else {
  //       setChecking(false);
  //     }
  //   });
  // }, [invalidateCookieToken]);

  // redirect login validation
  useEffect(() => {
    // check if token exists
    if (!ctx.token) {
      invalidateCookieToken();
    } else {
      // checkJwtToken(ctx.token);
      setChecking(false);
    }
  }, [ctx.token, invalidateCookieToken]);

  return checking ? (
    <div>
      Loading
    </div>
  ) : children;
}
