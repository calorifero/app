export const PAGE = (state = 'setup', action) => {
  switch (action.type) {
    case 'SETUP':
      return 'setup';
    case 'HOME':
      return 'home';
    default:
      return state;
  }
};
