import { combineReducers } from "redux";
import { CREDENTIALS } from '../components/Formbox/reducer'
export const rootReducer = combineReducers({
  credentials: CREDENTIALS,
});