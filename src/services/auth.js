import { client } from './client';

export default class AuthService {
  login(usrData) {
    const path = 'auth/login';
    return new Promise((resolve, reject) => {
      const clientX = client();
      clientX.post(path, usrData).then((resp) => {
        const { data } = resp;
        resolve(data);
      }).catch((e) => reject(e));
    });
  }

  store(usrData) {
    const path = 'auth/register';
    return new Promise((resolve, reject) => {
      const clientX = client();
      clientX.post(path, usrData).then((resp) => {
        const { data } = resp;
        resolve(data);
      }).catch((e) => reject(e));
    });
  }
}
