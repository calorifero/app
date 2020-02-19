import { combineReducers } from "redux";

const TEST = (state = 0, action) => {
  switch (action.payload) {
    case "HELLO":
      return state;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  test: TEST
});
