import axios from 'axios';

const host = 'http://127.0.0.1:8000';

// create axios api
const client = () => axios.create({
  baseURL: `${host}/api/`,
  headers: {
    'content-type': 'application/json',
  },
});

export { client };
