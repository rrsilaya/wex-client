import * as Api from '../../api';
import { handle } from 'redux-pack';

// Action Types
const GET_SESSION = 'SESSION/GET_SESSION';

// Action Creators
export const getSession = () => {
  return dispatch => {
    return dispatch({
      type: GET_SESSION,
      promise: Api.getSession()
    });
  };
};

// Initial State
const initialState = {
  isGettingSession: true,
  player: null
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SESSION:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingSession: true
        }),
        success: prevState => ({
          ...prevState,
          player: payload.data.data
        }),
        finish: prevState => ({
          ...prevState,
          isGettingSession: false
        })
      });

    default:
      return state;
  }
};

export default reducer;
