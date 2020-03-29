export const TEMPERATURE_STATUS = (
  state = {
    gradientColors: {
      first: '13dfff',
      second: '84f37b'
    }
  },
  action
) => {
  switch (action.type) {
    case 'GOOD':
      return {
        ...state,
        gradientColors: {
          first: '13dfff',
          second: '84f37b'
        }
      };
    case 'BAD':
      return {
        ...state,
        gradientColors: {
          first: '13dfff',
          second: '84f37b'
        }
      };
    default:
      return state;
  }
};
