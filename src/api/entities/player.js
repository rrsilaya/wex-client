import axios from 'axios';

export const getSession = () => {
  return axios.get('/api/player');
};
