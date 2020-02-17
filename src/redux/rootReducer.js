import { combineReducers } from "redux";
import { TEMPERATURE } from "../components/Home/Temperature/reducer";
export const rootReducer = combineReducers({
  temperature: TEMPERATURE
});
