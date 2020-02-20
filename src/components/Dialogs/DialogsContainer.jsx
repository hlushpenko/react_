import React from 'react';
import {sendMessageActionCreator, changeMessageActionCreator} from "../../redux/reducers/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => ({
    dialogsData: state.messagesPage,
});

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onChangeMessage: (text) => {
            dispatch(changeMessageActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;