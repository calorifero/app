export const SHOW_LOGO = () => ({
  type: 'SHOW_LOGO'
});
export const SHOW_TEMPERATURE = () => ({
  type: 'SHOW_TEMPERATURE'
});
export const SHOW_BANK = () => ({
  type: 'SHOW_BANK'
});

export const ANIMATE_LOGO = payload => ({
  type: 'ANIMATE_LOGO',
  payload
});
export const ANIMATE_TEMPERATURE = payload => ({
  type: 'ANIMATE_TEMPERATURE',
  payload
});
export const ANIMATE_BANK = payload => ({
  type: 'ANIMATE_BANK',
  payload
});
export const GOOD = () => ({
  type: 'GOOD'
});
export const BAD = () => ({
  type: 'BAD'
});
