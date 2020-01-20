import React from 'react';
import {sendMessageActionCreator, changeMessageActionCreator} from "../../redux/reducers/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();
                let changeMessage = (text) => {
                    store.dispatch(changeMessageActionCreator(text));
                };

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };
                return (
                    <Dialogs dialogsData={state.messagesPage} onChangeMessage={changeMessage}
                             sendMessage={sendMessage}/>
                );
            }}
    </StoreContext.Consumer>
};
export default DialogsContainer;