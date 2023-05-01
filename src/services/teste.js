import { client } from './client';

export default class TestService {
  testeConn() {
    // create path url
    const path = 'hello';
    // create get request
    return new Promise((resolve, reject) => {
      // create a client for private routes
      const clientX = client();
      // request
      clientX.get(path).then((resp) => {
        resolve(resp.data);
      }).catch((e) => reject(e));
    });
  }
}
