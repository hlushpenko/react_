import React from 'react';
import {sendMessageActionCreator, changeMessageActionCreator} from "../../redux/reducers/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage,
        isAuth: state.auth.isAuth
    }
};

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;