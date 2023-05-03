import { client } from './client';

export default class AuthService {
  login(usrData) {
    // create path url
    const path = 'auth/login';
    // create get request
    return new Promise((resolve, reject) => {
      // create a client for private routes
      const clientX = client();
      // request
      clientX.post(path, usrData).then((resp) => {
        const { data } = resp;
        resolve(data);
      }).catch((e) => reject(e));
    });
  }
}
