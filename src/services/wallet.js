import { privClient } from './client';

export default class WalletService {
  constructor(token) {
    this.token = token;
  }

  create(dataWallet) {
    const path = 'wallet';

    return new Promise((resolve, reject) => {
      const clientX = privClient(this.token);
      // request
      clientX.post(path, dataWallet).then((resp) => {
        const { data } = resp;
        resolve(data);
      }).catch((e) => reject(e));
    });
  }

  getAll() {
    const path = 'wallet';
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
