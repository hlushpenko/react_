import React from "react";
import {Alert, Col, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import userPhoto from "../../assets/img/avatar.jpg";
import Button from "react-bootstrap/Button";
import s from "./User.module.css";
import {usersAPI} from "../../../api/api";

const User = (props) => {
    return <Alert variant='secondary'>
        <Row>
            <Col>
                <Nav.Link as={Link} to={'/profile/' + props.user.id}>
                    <img alt="default_avatar"
                         src={props.user.photos.small ? props.user.photos.small : userPhoto}
                         className={s.avatar}/>
                </Nav.Link>
            </Col>

            <Col>
                {props.user.name}
                {props.user.status}
            </Col>

            <Col>
                {props.user.followed
                    ? <Button disabled={props.followingInProgress.some(id => (
                        id === props.user.id
                    ))}
                              variant="danger" onClick={() => {
                        props.toggleFollowingProgress(true, props.user.id);
                        usersAPI.subscribeUser(props.user.id).then(response => {
                            if (response.data.resultCode === 0) {
                                props.unsubscribe(props.user.id);
                            }
                            props.toggleFollowingProgress(false, props.user.id);
                        });
                    }}> Unsubscribe</Button>
                    : <Button disabled={props.followingInProgress.some(id => (
                        id === props.user.id
                    ))}
                              variant="success" onClick={() => {
                        props.toggleFollowingProgress(true, props.user.id);
                        usersAPI.unsubscribeUser(props.user.id).then(response => {
                            if (response.data.resultCode === 0) {
                                props.subscribe(props.user.id);
                            }
                            props.toggleFollowingProgress(false, props.user.id);
                        });
                    }}> Subscribe</Button>
                }
            </Col>
        </Row>
    </Alert>
};


export default User;