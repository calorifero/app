export const CREDENTIALS = (
  state = {
    ssid: "",
    password: ""
  },
  action
) => {
  switch (action.type) {
    case "ADD_CREDENTIALS":
      return action.state;
    default:
      return state;
  }
};
