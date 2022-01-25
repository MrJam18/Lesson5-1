import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Button, Icon, IconButton, TextField } from '@material-ui/core';
import { useRef } from 'react';
import { addChat, changeChatListAction, deleteChat } from '../store/chatList/actions';
import {useSelector, useDispatch} from 'react-redux';
import { addMessageList, deleteMessageList } from '../store/messages/actions';
import { getChatList } from '../store/chatList/selectors';
import { onValue, push, remove, set } from 'firebase/database';
import { chatListRef, getMsgsRefById } from '../service/firebase';

const useStyles = makeStyles({
    list: {
        width: '300px',
        borderRight: '1px solid black',
        zIndex: 1,
        alignSelf: 'stretch',
        padding: 0
    },
    input: {
      display: 'block',
      margin: '15px auto',
    }
})
let newChatID = 5;
const ChatList = () => {
  const chatList = useSelector(getChatList);
  useEffect(()=> {
    onValue(chatListRef, (snapshot) => {
      let chatListArray = [];
      snapshot.forEach((el) => {
       chatListArray.push(el.val())
    });
    dispatch(changeChatListAction(chatListArray));
  })}, []);
  const { chatID } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const input = useRef();
  const [addChatToggle, setAddChatToggle] = useState(true);
  const Assistent = ()=> {
      return (
        <div className="chat-list__assistent small-header">Please, select the chat for start messaging</div>
      )
    }
  const AddChatInput = () => {
      return <form className="add-chat-input" onSubmit={addChatHandler}>
        <TextField id="standard-basic" label="Enter chat-name" inputRef={input} className={classes.input} autoFocus />
        <Button variant="contained" color="primary" onClick={addChatHandler} >
          Submit
        </Button>
      </form>
    }
  const AddChatButton = () => {
      return <div className="container__position_center" onClick = {addChatButtonHandler}>
      <IconButton>
      <Icon style={{ fontSize: 30 }}>add_circle</Icon>
      </IconButton>
      </div>
    }
  const addChatButtonHandler = () => {
    setAddChatToggle(false);
  }
  const addChatHandler = (ev) => {
    ev.preventDefault();
    newChatID++;
    const fullChatID = 'chat' + newChatID;
    push(chatListRef, {name: input.current.value, id: fullChatID, img: 'default.png'});
    // dispatch(addChat(input.current.value, fullChatID));
    set(getMsgsRefById(fullChatID), {empty: true});
    // dispatch(addMessageList(fullChatID))
    setAddChatToggle(true);
  }
  const deleteChatHandler = (ev) => {
    ev.preventDefault();
    let currentChatID = ev.target.getAttribute('data-id');
    // dispatch(deleteChat(currentChatID));
    let newChatList = {...chatList};
    newChatList = chatList.filter((elem) => elem.id !== currentChatID);
    set(chatListRef, newChatList);
    remove(getMsgsRefById(currentChatID));
    // dispatch(deleteMessageList(currentChatID));
  }
    return (
      <>
      <div className="container-flex">
      <List component="nav" aria-label="main mailbox folders" className={'chatList ' + classes.list}>
      {chatList.map((chat)=>{
        return (<NavLink to={`/chats/${chat.id}`} key= {chat.id} className='link chat-list__link'>
          <ListItem button selected = {chat.id === chatID ? true : false} >
               <ListItemIcon>
               <img src= {`/img/${chat.img}`} alt={chat.name} className='list-img'/>
               </ListItemIcon>
               <ListItemText primary={chat.name} />
               <i className="fas fa-times chat-list__button_delete" data-id = {chat.id} onClick={deleteChatHandler}></i>
             </ListItem>
             </NavLink>)
      })}
        {addChatToggle ? <AddChatButton /> : <AddChatInput />}
      </List>
      {chatID ? null : <Assistent></Assistent>}
      <Outlet></Outlet>
      </div>
      </>
    );
};


export default ChatList;