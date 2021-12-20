import { useEffect, useState } from 'react';
import './App.css';
import ListComp from './components/ListComp';
import Messages from './components/Messages.jsx';
import Sender from './components/Sender.jsx';
import authors from './components/utils/authors';

const App = () => {
  let [messageList, setMessageList] = useState([]);
  const handleMessage = (message) => {
    if (message !== '') {
    pushMessageList(message, authors.user)
    }
  }
  const pushMessageList = (text, author)=> {
    setMessageList((oldMessageList)=> {
      return [...oldMessageList, {text: text, author: author, id: Date.now()}];
    })
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if (messageList[messageList.length-1]?.author === authors.user) {
        pushMessageList('hello, i am bot, glad to see you wanderer', 'bot')
      }
    }, 1500);
    return ()=> {
      clearTimeout(timer);
    }
  }, [messageList])
  return (
    <>
    <div className="container">
    <ListComp/>
    <div className="container-right">
      <Messages 
            messages = {messageList}/>
    <Sender handleMessage = {handleMessage}></Sender>
    </div>
    </div>
    </>
  );
}

export default App;
