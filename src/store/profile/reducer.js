const initialProfile = {
    showData: true,
    name: 'User',
    surname: 'Default',
    birthDate: '1994-04-17',
    gender: "Мужской",
}
export const profileReducer = (state = initialProfile, action) => {
    switch (action.type) {
        case 'CHANGE_SHOW_NAME': 
        return {
            ...state,
            showName: !state.showName
        }
        case 'PROFILE::CHANGE_DATA': 
        return {
            ...state, 
            name: action.payload.name,
            surname: action.payload.surname,
            birthDate: action.payload.birthDate,
            gender: action.payload.gender,
            showData: action.payload.showData
        }
        default: return state;
    }
}