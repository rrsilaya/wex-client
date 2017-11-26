import { handle } from 'redux-pack';
import * as Api from '../../api/';

// Action Types
const CHANGE_PAGE = 'GAME/CHANGE_PAGE';
const CHANGE_FORM = 'GAME/CHANGE_FORM';
const GET_CATEGORIES = 'GAME/GET_CATEGORIES';

// Action Creators
export const changePage = payload => {
  return {
    type: CHANGE_PAGE,
    payload
  };
};

export const changeForm = (name, value) => {
  return {
    type: CHANGE_FORM,
    payload: {
      name,
      value
    }
  };
};

export const getCategories = () => {
  return dispatch => {
    return dispatch({
      type: GET_CATEGORIES,
      promise: Api.getArcadeCategories()
    });
  };
};

// Initial State
const initialState = {
  page: 'splash',
  form: {
    name: '',
    qty: ''
  },

  categories: [],
  isGettingCategories: true,
  hasErroredCategories: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload
      };

    case CHANGE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [payload.name]: payload.value
        }
      };

    case GET_CATEGORIES:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingCategories: true,
          hasErroredCategories: false
        }),
        success: prevState => ({
          ...prevState,
          categories: payload.data.data
        }),
        failure: prevState => ({
          ...prevState,
          hasErroredCategories: true
        }),
        finish: prevState => ({
          ...prevState,
          isGettingCategories: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
