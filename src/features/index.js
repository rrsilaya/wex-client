import { combineReducers } from 'redux';

import session from './session/duck';
import dashboard from './dashboard/duck';

const rootReducer = combineReducers({
  // Combine all reducers here
  session,
  dashboard
});

export default rootReducer;
