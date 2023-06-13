import axios from 'axios';
import { environment } from '../environments';

// create axios api
const client = () => axios.create({
  baseURL: `${environment.host}/api`,
  headers: {
    'content-type': 'application/json',
  },
});

export { client };
