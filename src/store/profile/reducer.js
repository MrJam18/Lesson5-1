const initialProfile = {
    showData: true,
    name: 'User',
    surname: 'Default',
    birthDate: '1994-04-17',
    gender: "Мужской",
    isAuthed: false
    }

export const profileReducer = (state = initialProfile, action) => {
    switch (action.type) {
        case 'PROFILE::CHANGE_DATA': 
        return {
            ...state, 
            name: action.payload.name,
            surname: action.payload.surname,
            birthDate: action.payload.birthDate,
            gender: action.payload.gender,
            showData: action.payload.showData
        }
        case 'PROFILE::LOG_OUT':
            return {
                ...state,
                isAuthed: false
            }
        case 'PROFILE::LOG_IN':
            return {
                ...state,
                isAuthed: true
            }
        // case 'PROFILE::CREATE_USER':
        //     return {
        //         ...state,
        //         [action.payload.userID]: {
        //         name: action.payload.name,
        //         surname: action.payload.surname,
        //         birthDate: action.payload.birthDate,
        //         gender: action.payload.gender,
        //         showData: action.payload.showData
        //         },
        //         currentUser: action.payload.userID
        //     }
        default: return state;
    }
}