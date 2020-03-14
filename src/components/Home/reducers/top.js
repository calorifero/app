export const TOP = (
    state = {
        logo: 'none',
        temperature: 'flex',
        bank: 'flex'
    },
    action
) => {
    switch (action.type) {
        case 'SHOW_LOGO':
            return {
                logo: 'none',
                temperature: 'flex',
                bank: 'flex'
            };
        case 'SHOW_TEMPERATURE':
            return {
                logo: 'flex',
                temperature: 'none',
                bank: 'flex'
            };
        case 'SHOW_BANK':
            return {
                logo: 'flex',
                temperature: 'flex',
                bank: 'none'
            };
        default:
            return state;
    }
};
