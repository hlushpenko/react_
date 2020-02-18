import React from "react";
import {Alert, Card, Col, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import userPhoto from "../../assets/img/avatar.jpg";
import s from "../Users.module.css";
import Button from "react-bootstrap/Button";
import * as axios from "axios";
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
                    ? <Button variant="danger" onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "cda002cd-0608-42f2-bc80-c8912b3da152"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unsubscribe(props.user.id);
                                }
                            });
                    }}> Unsubscribe</Button>
                    : <Button variant="success" onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, null, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "cda002cd-0608-42f2-bc80-c8912b3da152"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.subscribe(props.user.id);
                                }
                            });
                    }}> Subscribe</Button>
                }
            </Col>
        </Row>
    </Alert>
};


export default User;