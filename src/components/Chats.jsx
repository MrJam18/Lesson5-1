import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './App.css';
import Messages from './Messages.jsx';
import Sender from './Sender.jsx';
import {authors} from './utils/authors';

const Chats = ({pushMessage, messageList, chatList}) => {
  const { chatID } = useParams();
  let chatAuthor;
  for (const element of chatList) {
    if (element.id === chatID ) {
      chatAuthor = element.name;
    }
  }
  const handleMessage = (message) => {
    if (message !== '') {
           pushMessage(message, authors.user, chatID)
           }
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if (messageList[chatID][messageList[chatID].length-1]?.author === authors.user) {
        pushMessage('hello, i am bot, glad to see you wanderer', chatAuthor, chatID)
      }
    }, 1500);
    return ()=> {
      clearTimeout(timer);
    }
  }, [messageList[chatID]])
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
