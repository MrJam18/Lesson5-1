import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Chat from './Chat.jsx';
import ChatList from './ChatList.jsx';
import Profile from './Profile.jsx';
import NotFound from './NotFound.jsx';
import News from './News.jsx';
import PrivateAccess from './PrivateAccess.jsx';
import PublicAccess from './PublicAccess.jsx';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAuthed } from '../store/profile/selectors.js';
import { doLogIn, doLogOut } from '../store/profile/actions.js';
import Register from './Register.jsx';
import Login from './Login.jsx';
import { auth, logOut } from '../service/firebase.js';

const Router = () => {
    const dispatch = useDispatch();
    const isAuthed = useSelector(getAuthed);
    const logoutHandler = async () => {
       await logOut();
       dispatch(doLogOut);
    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            dispatch(doLogIn);
          } else {
            dispatch(doLogOut);
            console.log('out');
          }
        })
      }, []);
      const ChatListLazy = lazy(() => import('./ChatList.jsx'));
      const ChatLazy = lazy(() => import('./Chat.jsx'));
   
    return (
        <BrowserRouter>
                    <Suspense fallback = {<p>Loading...</p>}>
            <ul className='header-menu'>
                {isAuthed ? (<li className='header-menu-element header__menu-element_left' onClick={logoutHandler}><div className="header-menu-link header__menu-link_auth">LOG OUT</div></li>) : (<li className='header-menu-element header__menu-element_left'><NavLink to='/' className = {({isActive})=> isActive ? 'header-menu-link header__menu-link_auth menu__active' : 'header-menu-link header__menu-link_auth'}>LOG IN</NavLink></li>)}
                <li className='header-menu-element'><NavLink to='chats' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >CHATS</NavLink></li>
                <li className='header-menu-element'><NavLink to='profile' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >PROFILE</NavLink></li>
                <li className='header-menu-element'><NavLink to='news' className = {({isActive})=> isActive ? 'header-menu-link menu__active' : 'header-menu-link'} >NEWS</NavLink></li>
            </ul>

            <Routes>
                <Route path='/profile' element= {<PrivateAccess Wrapped = {<Profile/> }/>}  exact></Route>
                <Route path='/chats' element= {<PrivateAccess Wrapped = {<ChatListLazy/>}/>}  exact>
                    <Route path=':chatID' element= {<ChatLazy/>} exact></Route>
                    <Route path= '*' element = {<NotFound/>}/>
                </Route>
                <Route path= '/' element = {<PublicAccess wrapped = {<Login/>}/>} exact />
                <Route path = '/register' element = {<PublicAccess wrapped = {<Register/>} />} exact />
                <Route path= '*' element = {<NotFound/>}/>
                <Route path= '/news' element = {<News/>}/>
            </Routes>
            </Suspense>
            
        </BrowserRouter>
    );
};

export default Router;