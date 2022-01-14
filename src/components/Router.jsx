import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Chats from './Chats.jsx';
import ChatList from './ChatList.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx';
import NotFound from './NotFound.jsx';
import News from './News.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <ul className='header-menu'>
                <li className='header-menu-element'><NavLink to='/' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'}>HOME</NavLink></li>
                <li className='header-menu-element'><NavLink to='chats' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >CHATS</NavLink></li>
                <li className='header-menu-element'><NavLink to='profile' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >PROFILE</NavLink></li>
                <li className='header-menu-element'><NavLink to='news' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >NEWS</NavLink></li>
            </ul>
            <Routes>
                <Route path='/profile' element= {<Profile />} exact></Route>
                <Route path= '/chats' element = {<ChatList/>} exact>
                    <Route path=':chatID' element= {<Chats/>} exact></Route>
                    <Route path= '*' element = {<NotFound/>}/>
                </Route>
                <Route path= '/' element = {<Home/>} exact/>
                <Route path= '*' element = {<NotFound/>}/>
                <Route path= '/news' element = {<News/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;