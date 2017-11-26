import axios from 'axios';

export const getCategories = () => {
  return axios.get('/api/category');
};

export const deleteQuestion = id => {
  return axios.delete(`/api/question/${id}`);
};

export const addQuestion = question => {
  return axios.post('/api/question', question);
};
