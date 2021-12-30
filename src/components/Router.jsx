import React, { useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Chats from './Chats.jsx';
import ChatList from './ChatList.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import NotFound from './NotFound.jsx';

const initialChatList = [
    {name: 'John Snow', id: 'chat1', img: 'chat1.jpg'},
    {name: "Zhanna D'ark", id: 'chat2', img: 'chat2.jpg'},
    {name: 'Geralt from Rivia', id: 'chat3', img: 'chat3.jpg'},
    {name: "Eniken Skywalker", id: 'chat4', img: 'chat4.jpg'},
    {name: "bot", id: 'chat5', img: 'chat5.jpg'},
]
const initialMessageList = initialChatList.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});
let newChatID = 5;

const Router = () => {
    let [chatList, setChatList] = useState(initialChatList);
    let [messageList, setMessageList] = useState(initialMessageList);
      const pushMessage = (text, author, chatID) => {
        setMessageList((oldMessageList) => {
          let newMessageList = {...oldMessageList, [chatID]: [...oldMessageList[chatID], {text, author, id: Date.now()}]};
          return newMessageList;
        });
      }
    const pushChatList = (chatName) => {
      newChatID++;
      setChatList((oldChatList)=>{
        return [...oldChatList, {name: chatName, id: 'chat' + newChatID, img: 'default.png'}]
      })
      setMessageList((oldMessageList)=> {
        let newMessageList = {...oldMessageList, ['chat' + newChatID]: []};
        return newMessageList;
      })
    }
    const deleteChat = (chatID) => {
      setChatList((old) => {
        let newElem = [...old];
        let index = newElem.findIndex((el)=>{
          if (el.id === chatID) {
            return true;
          }
        })
        newElem.splice(index, 1)
        return newElem;
      })
    }

    
    return (
        <BrowserRouter>
            <ul className='header-menu'>
                <li className='header-menu-element'><NavLink to='/' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'}>HOME</NavLink></li>
                <li className='header-menu-element'><NavLink to='chats' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >CHATS</NavLink></li>
                <li className='header-menu-element'><NavLink to='profile' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >PROFILE</NavLink></li>
            </ul>
            <Routes>
                <Route path='/profile' element= {<Profile />} exact></Route>
                <Route path= '/chats' element = {<ChatList chatList = {chatList} pushChatList = {pushChatList} deleteChat = {deleteChat}/>} exact>
                    <Route path=':chatID' element= {<Chats pushMessage= {pushMessage} messageList = {messageList} chatList = {chatList}></Chats>} exact></Route>
                    <Route path= '*' element = {<NotFound/>}/>
                </Route>
                <Route path= '/' element = {<Home/>} exact/>
                <Route path= '*' element = {<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;