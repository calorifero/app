export const TEMPERATURE = (state = 0, action) => {
  switch (action.type) {
    case "CHANGE_TEMPERATURE":
      return action.temperature;
    default:
      return state;
  }
};
