import axios from 'axios';
import { environment } from '../environments';

// create axios api
const client = () => axios.create({
  baseURL: `${environment.host}/api`,
  headers: {
    'content-type': 'application/json',
  },
});

// create axios api
const privClient = (token) => axios.create({
  baseURL: `${environment.host}/api`,
  headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${token}`,
  },
});

export { client, privClient };
