import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Container, Form} from "react-bootstrap";

const Dialogs = (props) => {
    let dialogs = props.dialogsData.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);

    let messages = props.dialogsData.messages.map(m => <Message key={m.id} message={m.message}/>);

    let newMessageText = React.createRef();

    let addMessageClickButton = () => {
        props.sendMessage();
    };

    let messageOnChange = () => {
        let text = newMessageText.current.value;
        props.onChangeMessage(text);
    };


    return <Container>
        <Row>
            <Col className={s.dialogs}>
                {dialogs}
            </Col>

            <Col>
                {messages}
                <Form>
                    <Form.Control type="text" placeholder="Write message"
                                  value={props.dialogsData.newMessageText} onChange={messageOnChange}
                                  ref={newMessageText}/>
                    <Button onClick={addMessageClickButton}>Send</Button>
                </Form>
            </Col>
        </Row>
    </Container>
};
export default Dialogs;