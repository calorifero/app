export const TOP = (
    state = {
        logo: 0,
        temperature: 1,
        bank: 1
    },
    action
) => {
    switch (action.type) {
        case 'SHOW_LOGO':
            return {
                logo: 0,
                temperature: 1,
                bank: 1
            };
        case 'SHOW_TEMPERATURE':
            return {
                logo: 1,
                temperature: 0,
                bank: 1
            };
        case 'SHOW_BANK':
            return {
                logo: 1,
                temperature: 1,
                bank: 0
            };
        default:
            return state;
    }
};
