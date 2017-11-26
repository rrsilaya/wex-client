import axios from 'axios';

export const getArcadeScores = () => {
  return axios.get('/api/score/arcade');
};
