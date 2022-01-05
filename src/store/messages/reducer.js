
const initialMessageList = {
    chat1: [],
    chat2: [],
    chat3: [],
    chat4: [],
    chat5: [],
}
export const messagesReducer = (state = initialMessageList, action) => {
    switch(action.type) {
        case 'MESSAGES::ADD_MESSAGE': 
        return ({
            ...state,
             [action.chatID]: [...state[action.chatID], {text: action.message, id: action.id, author: action.author}]
        })
        case 'MESSAGES::ADD_MESSAGE_LIST':
        return ({
            ...state,
            [action.chatID]: []
        })
        case 'MESSAGES::DELETE_MESSAGE_LIST':
            delete state[action.chatID]
            return ({
                ...state
            })
        default: return state;
    }
}