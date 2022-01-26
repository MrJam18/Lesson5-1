import { chatListReducer } from "../store/chatList/reducer"
import { messagesReducer } from "../store/messages/reducer"

describe('reducers tests', ()=> {
    it('return initState from message Reducer if type did not match', () => {
        const expected = {
            chat1: [],
            chat2: [],
            chat3: [],
            chat4: [],
            chat5: [],
        }
        const action = {
            type: 'MESSAGES::SOMETHING OTHER',
            payload: 'something'
        }
        const recieved = messagesReducer(expected, action);
        expect(recieved).toEqual(expected);
    })
    it("don't delete nothing if chat id did not match to state", ()=> {
        const state = [
            {name: 'John Snow', id: 'chat1', img: 'chat1.jpg'},
            {name: "Zhanna D'ark", id: 'chat2', img: 'chat2.jpg'},
            {name: 'Geralt from Rivia', id: 'chat3', img: 'chat3.jpg'},
            {name: "Eniken Skywalker", id: 'chat4', img: 'chat4.jpg'},
            {name: "bot", id: 'chat5', img: 'chat5.jpg'},
        ]
        const action = {
                type: "CHAT_LIST::DELETE_CHAT",
                chatID: 'chat10'
            }
        const expected = [
            {name: 'John Snow', id: 'chat1', img: 'chat1.jpg'},
            {name: "Zhanna D'ark", id: 'chat2', img: 'chat2.jpg'},
            {name: 'Geralt from Rivia', id: 'chat3', img: 'chat3.jpg'},
            {name: "Eniken Skywalker", id: 'chat4', img: 'chat4.jpg'},
            {name: "bot", id: 'chat5', img: 'chat5.jpg'},
        ]
        const recieved = chatListReducer(state, action);
        expect(recieved).toEqual(expected);
    })
    it('test add chatList from chatList Reducer with snapshots', ()=> {
        const state = [
            {name: 'John Snow', id: 'chat1', img: 'chat1.jpg'},
            {name: "Zhanna D'ark", id: 'chat2', img: 'chat2.jpg'},
            {name: 'Geralt from Rivia', id: 'chat3', img: 'chat3.jpg'},
            {name: "Eniken Skywalker", id: 'chat4', img: 'chat4.jpg'},
            {name: "bot", id: 'chat5', img: 'chat5.jpg'},
        ]
        const action = {
            type: 'CHAT_LIST::ADD_CHAT',
            chatID: 'chat6', name: 'Adriano Chelentano'
        }
        const recieved = chatListReducer(state, action);
        expect(recieved).toMatchSnapshot();
    })
})