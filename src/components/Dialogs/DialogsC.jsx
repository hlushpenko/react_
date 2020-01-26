import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends React.Component{
    constructor(props) {
        super(props);
    }

    dialogs = this.props.dialogsData.dialogs.map(d => <DialogItem key={d.id}  name={d.name}/>);
    messages = this.props.dialogsData.messages.map(m => <Message key = {m.id} message={m.message}/>);

    newMessageText = React.createRef();


    addMessageClickButton = () => {
        this.props.sendMessage();
    };

    messageOnChange = () => {
        let text = this.newMessageText.current.value;
        this.props.onChangeMessage(text);
    };

    render() {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {this.dialogs}
                </div>
                <div className={s.messages}>
                    {this.messages}
                    <textarea
                        placeholder="Write message"
                        value={this.props.dialogsData.newMessageText}
                        onChange={this.messageOnChange}
                        ref={this.newMessageText}
                    >
                </textarea>
                    <button onClick={this.addMessageClickButton}>Send</button>
                </div>
            </div>
        );
    }
}



export default Dialogs;