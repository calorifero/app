import { combineReducers } from 'redux';
import { TEMPERATURE_STATUS } from '../components/Home/reducers/temperature';
import { TOP } from '../components/Home/reducers/top';

export const rootReducer = combineReducers({
  temperatureStatus: TEMPERATURE_STATUS,
  top: TOP
});
