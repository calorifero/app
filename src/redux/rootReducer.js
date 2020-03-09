import { combineReducers } from "redux";
import { TEMPERATURE_STATUS } from "../components/Home/reducer"
export const rootReducer = combineReducers({
  temperatureStatus: TEMPERATURE_STATUS,
});
