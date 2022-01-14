export const addMessage = (chatID, message, author, id) => ({
    type: 'MESSAGES::ADD_MESSAGE',
    chatID, message, author, id,
})
export const addMessageList = (chatID) => ({
    type: 'MESSAGES::ADD_MESSAGE_LIST',
    chatID,
});
export const deleteMessageList = (chatID) => ({
    type: 'MESSAGES::DELETE_MESSAGE_LIST',
    chatID,
});

let timeout;
export const addMessageWithReply = (chatID, message, author, chatAuthor) => (dispatch)=> {
    dispatch(addMessage(chatID, message, author, Date.now()));
    clearTimeout(timeout);
    const botMessage = 'hello, i am bot, glad to see you wanderer';
        if (message !== botMessage ) {
            timeout = setTimeout(()=> {
                dispatch(addMessage(chatID, botMessage, chatAuthor, Date.now()));
            }, 1500)
        }
}