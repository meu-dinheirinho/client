import { privClient } from './client';

export default class CreditCardService {
  constructor(token) {
    this.token = token;
  }

  store(dataCard) {
    const path = 'creditCard';

    return new Promise((resolve, reject) => {
      const clientX = privClient(this.token);
      const reqData = {
        ...dataCard,
      };
      clientX.post(path, reqData).then((resp) => {
        const { data } = resp;
        resolve(data);
      }).catch((e) => reject(e));
    });
  }

  getAll() {
    const path = 'creditCard';
    return new Promise((resolve, reject) => {
      const clientX = privClient(this.token);
      // request
      clientX.get(path).then((resp) => {
        const { data } = resp;
        resolve(data);
      }).catch((e) => reject(e));
    });
  }

  update(account) {
    const path = `wallet/${account.id}`;

    return new Promise((resolve, reject) => {
      const clientX = privClient(this.token);
      // request
      clientX.put(path, account).then((resp) => {
        const { data } = resp;
        resolve(data);
      }).catch((e) => reject(e));
    });
  }
}
