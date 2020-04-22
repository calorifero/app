export const TEMPERATURE_STATUS = (
  state = {
    gradientColors: {
      first: '#13dfff',
      second: '#84f37b'
    },
    color: 'rgba(56,165,66, 0.2)'
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
        color: 'rgba(56,165,66, 0.2)'
      };
    case 'BAD':
      return {
        ...state,
        gradientColors: {
          first: '#F8DF00',
          second: '#E80000'
        },
        color: 'rgba(255, 107, 0, 0.85)'
      };
    default:
      return state;
  }
};
