import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Dialogs = (props) => {
    let dialogs = props.dialogsData.dialogs.map(d => <DialogItem key={d.id} name={d.name}/>);
    let messages = props.dialogsData.messages.map(m => <Message key={m.id} message={m.message}/>);


    let newMessageText = React.createRef();


    let addMessageClickButton = () => {
        props.sendMessage();
    };

    let messageOnChange = () => {
        let text = newMessageText.current.value;
        props.onChangeMessage(text);
    };


    return (
        <Row>
            <Col span={12} className = {s.dialogs}>
                {dialogs}
            </Col>
            <Col span={12}>
                {messages}
                <textarea
                    placeholder="Write message"
                    value={props.dialogsData.newMessageText}
                    onChange={messageOnChange}
                    ref={newMessageText}
                >
                </textarea>
                <Button onClick={addMessageClickButton}>Send</Button>
            </Col>
        </Row>
    )
};
export default Dialogs;