import React from "react";
import {Alert, Card, Col, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import userPhoto from "../../assets/img/avatar.jpg";
import s from "../Users.module.css";
import Button from "react-bootstrap/Button";
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
                        props.unsubscribe(props.user.id)
                    }}> Unsubscribe</Button>
                    : <Button variant="success" onClick={() => {
                        props.subscribe(props.user.id)
                    }}> Subscribe</Button>
                }
            </Col>
        </Row>



    </Alert>
};

export default User;