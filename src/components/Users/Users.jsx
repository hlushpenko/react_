import React from "react";
import s from "./Users.module.css";
import userPhoto from "../assets/img/avatar.jpg";
import Button from 'react-bootstrap/Button';
import {Alert, Card, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import User from "./User/User";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <Container>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>


        {props.users.map(u => <div key={u.id}>
            <User user={u} {...props} />

        </div>)
        }


        {/*<Card style={{width: '11rem'}}>*/}
        {/*    {props.users.map(u => <div key={u.id}>*/}
        {/*        <Nav.Link as={Link} to={'/profile/' + u.id}>*/}
        {/*            <Card.Img variant="top"*/}
        {/*                      alt="default_avatar"*/}
        {/*                      src={u.photos.small ? u.photos.small : userPhoto}*/}
        {/*                      className={s.avatar}/>*/}
        {/*        </Nav.Link>*/}
        {/*        <Card.Body>*/}
        {/*            <Card.Title>{u.name}</Card.Title>*/}
        {/*            <Card.Text>*/}
        {/*                {u.status}*/}
        {/*                /!*<div>{u.location.cityName}</div>*!/*/}
        {/*                /!*<div>{u.location.country}</div>*!/*/}
        {/*            </Card.Text>*/}
        {/*            <div>*/}
        {/*                {u.followed*/}
        {/*                    ? <Button variant="danger" onClick={() => {*/}
        {/*                        props.unsubscribe(u.id)*/}
        {/*                    }}> Unsubscribe</Button>*/}
        {/*                    : <Button variant="success" onClick={() => {*/}
        {/*                        props.subscribe(u.id)*/}
        {/*                    }}> Subscribe</Button>*/}
        {/*                }*/}
        {/*            </div>*/}
        {/*        </Card.Body>*/}
        {/*    </div>)*/}
        {/*    }*/}
        {/*</Card>*/}
    </Container>
};
export default Users;