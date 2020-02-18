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


        {props.users.map(u =>
            <div key={u.id}>
                <User user={u} {...props} />
            </div>)
        }
    </Container>
};
export default Users;