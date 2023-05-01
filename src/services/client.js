import axios from 'axios';

const host = 'http://localhost:8080';

// create axios api
const client = () => axios.create({
  baseURL: `${host}/api`,
  headers: {
    'content-type': 'application/json',
  },
});

export { client };
