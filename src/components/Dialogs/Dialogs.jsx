import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.dialogsData.map( d =>  <DialogItem id={d.id} name={d.name}/> );
    let messages = props.messageData.map( m =>  <Message message={m.message}/> );
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
};
export default Dialogs;