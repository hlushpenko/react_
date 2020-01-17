const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
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