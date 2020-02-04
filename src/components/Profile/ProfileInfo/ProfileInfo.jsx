import React from "react";
import s from './ProfileInfo.module.css';
import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const ProfileInfo = (props) => {
    return <Row className={s.info}>
        <Col>
            <img className='mx-auto d-block' src={props.profile.photos.large} alt="Ava"/>
        </Col>

        <Col className={s.acordion}>
            Мене звати: {props.profile.fullName}.
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Про мене
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ListGroup className={s.listInfo}>
                                <ListGroup.Item>{props.profile.aboutMe}</ListGroup.Item>
                                <ListGroup.Item>{props.profile.lookingForAJob ? 'Шукаю роботу' : 'Вже маю роботу'}</ListGroup.Item>
                                {props.profile.lookingForAJobDescription ?
                                    <ListGroup.Item>{props.profile.lookingForAJobDescription}</ListGroup.Item> : ''}
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Контакти
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <ListGroup className={s.listInfo}>
                                <ListGroup.Item>Facebook: {props.profile.contacts.facebook}</ListGroup.Item>
                                <ListGroup.Item>Website: {props.profile.contacts.website}</ListGroup.Item>
                                <ListGroup.Item>VK: {props.profile.contacts.vk}</ListGroup.Item>
                                <ListGroup.Item>Twitter: {props.profile.contacts.twitter}</ListGroup.Item>
                                <ListGroup.Item>Instagram: {props.profile.contacts.instagram}</ListGroup.Item>
                                <ListGroup.Item>Youtube: {props.profile.contacts.youtube}</ListGroup.Item>
                                <ListGroup.Item>Github: {props.profile.contacts.github}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </Col>
    </Row>
};


export default ProfileInfo;
