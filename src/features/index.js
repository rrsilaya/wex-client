import { combineReducers } from 'redux';

import session from './session/duck';

const rootReducer = combineReducers({
  // Combine all reducers here
  session
});

export default rootReducer;
