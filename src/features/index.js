import { combineReducers } from 'redux';

import session from './session/duck';
import dashboard from './dashboard/duck';
import game from './game/duck';

const rootReducer = combineReducers({
  // Combine all reducers here
  session,
  dashboard,
  game
});

export default rootReducer;
