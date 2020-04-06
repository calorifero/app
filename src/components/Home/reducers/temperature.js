export const TEMPERATURE_STATUS = (
  state = {
    gradientColors: {
      first: '#13dfff',
      second: '#84f37b'
    },
        color: "rgba(132,243,123, 0.5)"
  },
  action
) => {
  switch (action.type) {
    case 'GOOD':
      return {
        ...state,
        gradientColors: {
          first: '#13dfff',
          second: '#84f37b'
        },
        color: "rgba(132,243,123, 0.5)"
      };
    case 'BAD':
      return {
        ...state,
        gradientColors: {
          first: '#ff0000',
          second: '#f10bc0'
        },
        color: "rgba(220,20,60, 0.5)"
      };
    default:
      return state;
  }
};
