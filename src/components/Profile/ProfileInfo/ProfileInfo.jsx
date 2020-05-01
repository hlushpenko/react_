import React from "react";
// import s from './ProfileInfo.module.css';
import {Card, Col, ListGroup, Row} from "react-bootstrap";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <Row>
            <Col>
                <img className='mx-auto d-block' src={props.profile.photos.large} alt="Ava"/>
            </Col>
            <Col>
                <ListGroup variant="flush">

                    <ProfileStatus aboutMe={props.profile.aboutMe}/>
                    {/*<ListGroup.Item>Про мене: {props.profile.aboutMe}</ListGroup.Item>*/}
                    <ListGroup.Item>{props.profile.lookingForAJob ? 'Шукаю роботу' : 'Вже маю роботу'}</ListGroup.Item>
                    {props.profile.lookingForAJobDescription ?
                        <ListGroup.Item>{props.profile.lookingForAJobDescription}</ListGroup.Item> : ''}


                    <ListGroup.Item>Facebook: {props.profile.contacts.facebook}</ListGroup.Item>
                    <ListGroup.Item>Website: {props.profile.contacts.website}</ListGroup.Item>
                    <ListGroup.Item>VK: {props.profile.contacts.vk}</ListGroup.Item>
                    <ListGroup.Item>Twitter: {props.profile.contacts.twitter}</ListGroup.Item>
                    <ListGroup.Item>Instagram: {props.profile.contacts.instagram}</ListGroup.Item>
                    <ListGroup.Item>Youtube: {props.profile.contacts.youtube}</ListGroup.Item>
                    <ListGroup.Item>Github: {props.profile.contacts.github}</ListGroup.Item>
                </ListGroup>
            </Col>


        </Row>
    )
};


export default ProfileInfo;
