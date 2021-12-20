import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
const useStyles = makeStyles({
    list: {
        width: '300px',
        borderRight: '1px solid black',
        zIndex: 1,
        height: '98.5vh'
    }
})

const ListComp = () => {
    const classes = useStyles();
    let [chatList, setChatList] = useState([
      {name: 'John Snow', id: 0}, {name: "Zhanna D'ark", id: 1}, {name: 'Geralt from Rivia', id: 2}, {name: "Eniken Skywalker", id: 3}, {name: "Clark Kent" , id: 4}, {name: 'bot', id: 5,}
    ])
    console.log(chatList)
    return (
      <List component="nav" aria-label="main mailbox folders" className={'chatList ' + classes.list}>
      {chatList.map((chat)=>{
        return (<ListItem button key= {chat.id} selected = {chat.id == 5 ? true : false} >
               <ListItemIcon>
               <img src= {`/img/${chat.id}.jpg`} alt={chat.name} className='list-img'/>
               </ListItemIcon>
               <ListItemText primary={chat.name} />
             </ListItem>)
      })}
      </List>
    );
};

export default ListComp;