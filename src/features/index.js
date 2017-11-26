import { combineReducers } from 'redux';

import dashboard from './dashboard/duck';
import game from './game/duck';

const rootReducer = combineReducers({
  // Combine all reducers here
  dashboard,
  game
});

export default rootReducer;
