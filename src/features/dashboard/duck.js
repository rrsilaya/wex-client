import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action types
const GET_CATEGORIES = 'CATEGORY/GET_CATEGORIES';

// Action Creators
export const getAllCategories = () => {
  return dispatch => {
    return dispatch({
      type: GET_CATEGORIES,
      promise: Api.getCategories()
    });
  };
};

const initialState = {
  isGettingQuestion: false,
  categories: []
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingQuestion: false
        }),
        success: prevState => ({
          ...prevState,
          categories: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingQuestion: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
