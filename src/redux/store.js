import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hi, how a u', like: 1},
                {id: 2, text: 'Its my f post', like: 55}
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Vova'},
                {id: 2, name: 'Nick'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Vanya'},
                {id: 5, name: 'David'}
            ],
            messages: [
                {id: 1, sender_id: 1, message: 'Hello'},
                {id: 2, sender_id: 2, message: 'Hi'},
                {id: 3, sender_id: 1, message: ')))))))))))))'}
            ],
            newMessageText : ''
        }
    },

    _callSubscriber() { },

    subscriber(observer) {
        this._callSubscriber = observer;  //Спостережувач OBSERVER
    },
    getState() {
        return this._state;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);

    }
};





window.store = store;

export default store;