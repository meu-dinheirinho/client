import Cookies from 'universal-cookie';
import { environment } from '../environments';

// import product name
const cookieTokenKey = () => `${environment.appName}-stoken`;
const cookieOpts = { path: '/' };

// cookies control (default)
const cookies = new Cookies();

// get cookie token by name
export function getCookieToken() {
  return cookies.get(cookieTokenKey());
}

// set cookie token by name
export function setCookieToken(tkn) {
  cookies.set(cookieTokenKey(), tkn, cookieOpts);
}

// remove cookie by name
export function removeCookies() {
  cookies.remove(cookieTokenKey(), cookieOpts);
}
