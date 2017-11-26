import axios from 'axios';

export const getSession = () => {
  return axios.get('/api/player');
};

export const newGame = player => {
  return axios.post('/api/player', player);
};

export const endGame = () => {
  return axios.put('/api/player');
};

export const answerQuestion = (index, answer) => {
  return axios.put(`/api/player/${index}`, answer);
};
