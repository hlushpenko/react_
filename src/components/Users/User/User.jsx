import React from "react";
import {Alert, Col, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import userPhoto from "../../assets/img/avatar.jpg";
import s from "../Users.module.css";
import Button from "react-bootstrap/Button";

import {usersAPI} from "../../../api/api";
// import s from "./User.module.css";

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
                {/*<div>{u.location.cityName}</div>*/}
                {/*<div>{u.location.country}</div>*/}

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