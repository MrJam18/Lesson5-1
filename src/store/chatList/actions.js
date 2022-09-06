import { onValue, push, remove, set } from "firebase/database";
import { chatListRef, getMsgsRefById } from "../../service/firebase";

export const addChat = (name, chatID) => ({
    type: 'CHAT_LIST::ADD_CHAT',
    chatID, name
})
export const deleteChat = (chatID) => ({
    type: "CHAT_LIST::DELETE_CHAT",
    chatID
})

export const changeChatListAction = (chatList) => ({
    type: "CHAT_LIST::CHANGE",
    chatList
})
    let newChatID = 1;
export const addChatThunk = (chatName) => () => {
    newChatID++;
    const fullChatID = 'chat' + newChatID;
    push(chatListRef, {name: chatName, id: fullChatID, img: 'default.png'});
    set(getMsgsRefById(fullChatID), {empty: true});
}
export const deleteChatThunk = (chatID) => (_, getState) => {
    let newChatList = [...getState().chats];
    newChatList = newChatList.filter(elem => elem.id !== chatID);
    set(chatListRef, newChatList);
    remove(getMsgsRefById(chatID));  
}
export const iniChatListTrackingThunk = () => (dispatch) => {
    onValue(chatListRef, (snapshot) => {
        let chatListArray = [];
        snapshot.forEach((el) => {
         chatListArray.push(el.val());
      });
      dispatch(changeChatListAction(chatListArray));
    });
    
}