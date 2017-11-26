import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action types
const GET_CATEGORIES = 'CATEGORY/GET_CATEGORIES';
const DELETE_QUESTION = 'QUESTION/DELETE_QUESTION';
const ADD_QUESTION = 'QUESTION/ADD_QUESTION';

// Action Creators
export const getAllCategories = () => {
  return dispatch => {
    return dispatch({
      type: GET_CATEGORIES,
      promise: Api.getCategories()
    });
  };
};

export const addQuestion = question => {
  return dispatch => {
    dispatch({
      type: ADD_QUESTION,
      promise: Api.addQuestion(question)
    });
  };
};

export const deleteQuestion = id => {
  return dispatch => {
    dispatch({
      type: DELETE_QUESTION,
      promise: Api.deleteQuestion(id),
      meta: { id }
    });
  };
};

const initialState = {
  isGettingQuestion: false,
  isAddingQuestion: false,
  categories: [],
  questions: []
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

    case ADD_QUESTION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isAddingQuestion: true
        }),
        success: prevState => ({
          ...prevState,
          questions: [...state.questions, payload.data]
        }),
        finish: prevState => ({
          ...prevState,
          isAddingQuestion: false
        })
      });

    case DELETE_QUESTION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        })
      });

    default:
      return state;
  }
};

export default reducer;
