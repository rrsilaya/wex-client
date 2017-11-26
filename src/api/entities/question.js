import axios from 'axios';

export const getArcadeCategories = () => {
  return axios.get('/api/category');
};
