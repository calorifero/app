export const CREDENTIALS = (
  state = {
    ssid: "",
    password: ""
  },
  action
) => {
  switch (action.type) {
    case "ADD_CREDENTIALS":
      return action.payload;
    default:
      return state;
  }
};
