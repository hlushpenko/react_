import React from 'react';
import {sendMessageActionCreator, changeMessageActionCreator} from "../../redux/reducers/messages-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let changeMessage = (text) => {
        props.dispatch(changeMessageActionCreator(text));
};

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    };

    return <Dialogs dialogsData={props.dialogsData} onChangeMessage={changeMessage} sendMessage={sendMessage} />;
};
export default DialogsContainer;