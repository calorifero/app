export const ANIMATION = (
  state = {
    logo: false,
    temperature: false,
    bank: false
  },
  action
) => {
  switch (action.type) {
    case 'ANIMATE_TEMPERATURE':
      return {
        temperature: action.payload,
      };
    case 'ANIMATE_LOGO':
      return {
        logo: action.payload
      };
    case 'ANIMATE_BANK':
      return {
        bank: action.payload,
      };
    default:
      return state;
  }
};
