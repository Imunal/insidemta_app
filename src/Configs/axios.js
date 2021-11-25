import axios from 'axios';

export default axios.create({
  baseURL: `https://api.insidemta.pl/api/`,
  //baseURL: `http://127.0.0.1:3333/api/`,
});
