import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { chatListReducer } from './chatList/reducer';
import { messagesReducer } from './messages/reducer';
import { profileReducer } from './profile/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'lesson5',
    storage,
  }
const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatListReducer,
    messages: messagesReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
