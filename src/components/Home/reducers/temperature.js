export const TEMPERATURE_STATUS = (
  state = {
    gradientColors: {
      first: '#13dfff',
      second: '#84f37b'
    },
    color: 'rgba(132,243,123, 0.5)'
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
        color: 'rgba(132,243,123, 0.5)'
      };
    case 'BAD':
      return {
        ...state,
        gradientColors: {
          first: '#ff2b56',
          second: '#f3cf7b'
        },
        color: 'rgba(155, 10, 39, 0.65)'
      };
    default:
      return state;
  }
};
