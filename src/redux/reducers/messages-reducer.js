const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initializeState = {
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
};

const messagesReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                sender_id: 2,
                message: state.newMessageText
            };
            if (newMessage.message) {
                state.messages.push(newMessage);
                state.newMessageText = '';
            }
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText;
            return state;
        }
        default:
            return state;
    }
};



export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const changeMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});


export default messagesReducer;