import React from "react";
import s from "./Users.module.css";
import {Container} from "react-bootstrap";
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