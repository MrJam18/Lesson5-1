import { push, set } from "firebase/database";
import { getMsgsRefById } from "../../service/firebase";

export const changeCurrentMessageListAction = (messageList, chatID) => ({
    type: "MESSAGES::CHANGE_MESSAGE_LIST",
    messageList, chatID
})
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
export const changeMessageListAction = (messageList) => ({
    type: 'MESSAGES::CHANGE',
    messageList
})

let timeout;
export const addMessageWithReply = (chatID, message, author, chatAuthor) => (dispatch)=> {
    push(getMsgsRefById(chatID), {text: message, author, id: Date.now()});
    // dispatch(addMessage(chatID, message, author, Date.now()));
    clearTimeout(timeout);
    const botMessage = 'hello, i am bot, glad to see you wanderer';
        if (message !== botMessage ) {
            timeout = setTimeout(()=> {
                push(getMsgsRefById(chatID), {text: botMessage, author: chatAuthor, id: Date.now()})
                // dispatch(addMessage(chatID, botMessage, chatAuthor, Date.now()));
            }, 1500)
        }
}