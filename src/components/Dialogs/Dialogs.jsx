import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.dialogsData.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messages = props.dialogsData.messages.map(m => <Message message={m.message}/>);


    let newMessageText = React.createRef();


    let addMessageClickButton = () => {
        props.sendMessage();
    };

    let messageOnChange = () => {
        let text = newMessageText.current.value;
        props.onChangeMessage(text);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea
                    placeholder="Write message"
                    value={props.dialogsData.newMessageText}
                    onChange={messageOnChange}
                    ref={newMessageText}
                >
                </textarea>
                <button onClick={addMessageClickButton}>Send</button>
            </div>
        </div>
    )
};
export default Dialogs;