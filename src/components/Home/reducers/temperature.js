export const TEMPERATURE_STATUS = (
  state = {
    gradientColors: {
      first: '#13dfff',
      second: '#84f37b'
    },
        color: "rgba(132,243,123, 0.3)"
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
        color: "rgba(132,243,123, 0.3)"
      };
    case 'BAD':
      return {
        ...state,
        gradientColors: {
          first: '#ff0000',
          second: '#f10bc0'
        },
        color: "rgba(255,0,0, 0.3)"
      };
    default:
      return state;
  }
};
