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
    timeout = setTimeout(()=>{
        if (message !== 'hello, i am bot, glad to see you wanderer' ) {
          dispatch(addMessage(chatID, 'hello, i am bot, glad to see you wanderer', chatAuthor, Date.now()));
        }
      }, 1500);
}