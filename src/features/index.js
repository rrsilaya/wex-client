import { combineReducers } from 'redux';

import dashboard from './dashboard/duck';
import game from './game/duck';
import highscores from './game/highscore/duck';

const rootReducer = combineReducers({
  // Combine all reducers here
  dashboard,
  game,
  highscores
});

export default rootReducer;
