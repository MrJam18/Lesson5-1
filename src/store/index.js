import {combineReducers, createStore} from 'redux'
import { chatListReducer } from './chatList/reducer';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';

export const store = createStore(combineReducers({
    profile: profileReducer,
    chats: chatListReducer,
    messages: messagesReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ &&                        
    window.__REDUX_DEVTOOLS_EXTENSION__()
);