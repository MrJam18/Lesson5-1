export const addMessage = (chatID, message, author) => ({
    type: 'MESSAGES::ADD_MESSAGE',
    chatID, message, author
})
export const addMessageList = (chatID) => ({
    type: 'MESSAGES::ADD_MESSAGE_LIST',
    chatID
})