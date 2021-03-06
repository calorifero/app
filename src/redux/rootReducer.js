import { combineReducers } from 'redux';
import { TEMPERATURE_STATUS } from '../components/Home/reducers/temperature';
import { TOP } from '../components/Home/reducers/top';

import { ANIMATION } from '../components/Home/reducers/animation';

export const rootReducer = combineReducers({
  temperatureStatus: TEMPERATURE_STATUS,
  top: TOP,
  animation: ANIMATION
});
