import React from "react";
import s from './ProfileInfo.module.css';
import {Alert, Card, Col, ListGroup, Row} from "react-bootstrap";

const ProfileInfo = (props) => {
    return <Alert variant='secondary' className={s.profile}>
        <Row>
            <Col>
                <Card>
                    <Card.Img variant="top" src={props.profile.photos.large} alt="Ava"/>
                </Card>
            </Col>
            <Col>
                <Card>
                    <ListGroup>
                        <ListGroup.Item> Мене звати: {props.profile.fullName}.</ListGroup.Item>
                        <ListGroup.Item>{props.profile.aboutMe}</ListGroup.Item>
                        <ListGroup.Item>{props.profile.lookingForAJob ? 'Шукаю роботу' : 'Вже маю роботу'}</ListGroup.Item>
                        {props.profile.lookingForAJobDescription ?
                            <ListGroup.Item>{props.profile.lookingForAJobDescription}</ListGroup.Item> : ''}
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card>
                    <ListGroup>
                        {props.profile.contacts.facebook ?
                            <ListGroup.Item>Facebook: {props.profile.contacts.facebook}</ListGroup.Item> : ''}

                        {props.profile.contacts.website ?
                            <ListGroup.Item>Website: {props.profile.contacts.website}</ListGroup.Item> : ''}


                        {props.profile.contacts.vk ?
                            <ListGroup.Item>VK: {props.profile.contacts.vk}</ListGroup.Item> : ''}

                        <ListGroup.Item>Twitter: {props.profile.contacts.twitter}</ListGroup.Item>
                        <ListGroup.Item>Instagram: {props.profile.contacts.instagram}</ListGroup.Item>
                        <ListGroup.Item>Youtube: {props.profile.contacts.youtube}</ListGroup.Item>
                        <ListGroup.Item>Github: {props.profile.contacts.github}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    </Alert>

};


export default ProfileInfo;
