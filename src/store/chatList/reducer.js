const initialChatList = [
    {name: 'John Snow', id: 'chat1', img: 'chat1.jpg'},
    {name: "Zhanna D'ark", id: 'chat2', img: 'chat2.jpg'},
    {name: 'Geralt from Rivia', id: 'chat3', img: 'chat3.jpg'},
    {name: "Eniken Skywalker", id: 'chat4', img: 'chat4.jpg'},
    {name: "bot", id: 'chat5', img: 'chat5.jpg'},
]
export const chatListReducer = (state = initialChatList, action) => {
    switch(action.type) {
        case 'CHAT_LIST::ADD_CHAT':
            return [
                ...state,
                {name: action.name, id: action.chatID, img: 'default.png'}
            ]
        case "CHAT_LIST::DELETE_CHAT":
            return state.filter((elem) => elem.id !== action.chatID);
        case 'CHAT_LIST::CHANGE':
            return action.chatList;
        default: return state;
    }
}