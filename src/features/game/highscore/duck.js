import * as Api from '../../../api';
import { handle } from 'redux-pack';

const GET_HIGHSCORES = 'GET_HIGHSCORES';

export const getHighscores = () => {
  return dispatch => {
    return dispatch({
      type: GET_HIGHSCORES,
      promise: Api.getArcadeScores()
    });
  };
};

const initialState = {
  list: [
    {
      name: 'User',
      score: 100,
      categories: ['Anime', 'Memes', 'Movie']
    },
    {
      name: 'User',
      score: 90,
      categories: ['Anime', 'Memes', 'Movie']
    },
    {
      name: 'User',
      score: 80,
      categories: ['Anime', 'Memes', 'Movie']
    },
    {
      name: 'User',
      score: 70,
      categories: ['Anime', 'Memes', 'Movie']
    },
    {
      name: 'User',
      score: 60,
      categories: ['Anime', 'Memes', 'Movie']
    }
  ]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_HIGHSCORES:
      return handle(state, action, {
        success: prevState => {
          return {
            ...prevState,
            list: payload.data.data
          };
        }
      });

    default:
      return state;
  }
};

export default reducer;
