const initialState = {
    showName: true,
    name: 'User',
    surname: 'Default',
    birthDate: '24.04.2021',
    gender: 'Мужской',
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SHOW_NAME': 
        return {
            ...state,
            showName: !state.showName
        }
        default: 
        return state;
    }
}