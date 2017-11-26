import { handle } from 'redux-pack';
import * as Api from '../../api/';

// Action Types
const CHANGE_PAGE = 'GAME/CHANGE_PAGE';
const CHANGE_FORM = 'GAME/CHANGE_FORM';
const GET_CATEGORIES = 'GAME/GET_CATEGORIES';
const NEW_GAME = 'GAME/NEW_GAME';
const END_GAME = 'GAME/END_GAME';
const GET_SESSION = 'SESSION/GET_SESSION';
const ANSWER_QUESTION = 'GAME/ANSWER_QUESTION';

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

export const newGame = data => {
  return dispatch => {
    return dispatch({
      type: NEW_GAME,
      promise: Api.newGame(data)
    });
  };
};

export const endGame = () => {
  return dispatch => {
    return dispatch({
      type: END_GAME,
      promise: Api.endGame()
    });
  };
};

export const getSession = () => {
  return dispatch => {
    return dispatch({
      type: GET_SESSION,
      promise: Api.getSession()
    });
  };
};

export const answerQuestion = (index, answer) => {
  return dispatch => {
    return dispatch({
      type: ANSWER_QUESTION,
      promise: Api.answerQuestion(index, { answer })
    });
  };
};

// Initial State
const initialState = {
  page: 'splash',
  form: {
    name: '',
    qty: '',
    categories: []
  },

  categories: [],
  isGettingCategories: true,
  hasErroredCategories: false,

  player: null,
  isGettingSession: true,

  isAnswering: false
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

    case NEW_GAME:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingCategories: true
        }),
        success: prevState => ({
          ...prevState,
          player: payload.data.data,
          page: 'gameplay'
        }),
        finish: prevState => ({
          ...prevState,
          isGettingCategories: false,
          form: initialState.form
        })
      });

    case END_GAME:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          page: 'splash',
          player: null
        })
      });

    case GET_SESSION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          player: payload.data.data,
          page: payload.data.data ? 'gameplay' : 'splash'
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
      });

    case ANSWER_QUESTION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isAnswering: true
        }),
        success: prevState => ({
          ...prevState,
          player: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isAnswering: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
