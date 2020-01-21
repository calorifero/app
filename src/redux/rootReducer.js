import { combineReducers } from "redux";
import { CREDENTIALS } from "../components/FormBox/reducer";
export const rootReducer = combineReducers({
  credentials: CREDENTIALS
});
