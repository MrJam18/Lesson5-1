import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './App.css';
import Messages from './Messages.jsx';
import Sender from './Sender.jsx';
import {authors} from './utils/authors';
import {useSelector, useDispatch} from 'react-redux';
import { addMessage } from '../store/messages/actions';
import { getMessageList } from '../store/messages/selectors';
import { getChatList } from '../store/chatList/selectors';

const Chats = () => {
  const { chatID } = useParams();
  const messageList = useSelector(getMessageList)
  const dispatch = useDispatch();
  const chats = useSelector(getChatList)
  const chatAuthor = chats.find((el)=> {
    if (el.id === chatID) {
      return true;
    }
    return false
  })?.name;
  const handleMessage = (message) => {
    if (message !== '') {
           dispatch(addMessage(chatID, message, authors.user));
           }
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if (messageList[chatID][messageList[chatID].length-1]?.author === authors.user) {
        dispatch(addMessage(chatID, 'hello, i am bot, glad to see you wanderer', chatAuthor));
      }
    }, 1500);
    return ()=> {
      clearTimeout(timer);
    }
  }, [messageList[chatID]]);
  if (!messageList[chatID]) {
    return <Navigate to= '/chats'/>
  }
  return (
    <>
    <div className="container-right">
      <Messages 
            messages = {messageList[chatID]} />
    <Sender handleMessage = {handleMessage}></Sender>
    </div>
    </>
  );
}

export default Chats;
