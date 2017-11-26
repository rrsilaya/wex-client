import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action types
const GET_CATEGORIES = 'CATEGORY/GET_CATEGORIES';
const DELETE_QUESTION = 'QUESTION/DELETE_QUESTION';
const ADD_QUESTION = 'QUESTION/ADD_QUESTION';
const EDIT_QUESTION = 'QUESTION/EDIT_QUESTION';

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
      promise: Api.addQuestion(question),
      meta: { category: question.category }
    });
  };
};

export const deleteQuestion = (id, category) => {
  return dispatch => {
    dispatch({
      type: DELETE_QUESTION,
      promise: Api.deleteQuestion(id),
      meta: { id, category }
    });
  };
};

const initialState = {
  isGettingQuestion: false,
  isAddingQuestion: false,
  categories: [],

  isDeleting: false
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
        success: prevState => {
          const categories = prevState.categories.map(item => item.category);
          const state = { ...prevState };
          let index;

          if ((index = categories.indexOf(action.meta.category)) !== -1) {
            state.categories[index]['questions'].push(payload.data.data);
          } else {
            state.categories.push({
              category: action.meta.category,
              questions: [payload.data.data]
            });
          }

          return state;
        },
        finish: prevState => ({
          ...prevState,
          isAddingQuestion: false
        })
      });

    case DELETE_QUESTION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isDeleting: true
        }),
        success: prevState => ({
          ...prevState,
          categories: prevState.categories.map(cat => {
            if (cat.category !== action.meta.category) return cat;

            return {
              ...cat,
              questions: cat.questions.filter(
                question => question._id !== action.meta.id
              )
            };
          })
        }),
        finish: prevState => ({
          ...prevState,
          isDeleting: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
