import React from "react";
import s from "./Users.module.css";
import userPhoto from "../assets/img/avatar.jpg";
import Button from 'react-bootstrap/Button';
const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>

                        <span>
                            <div>

                                <img alt="default_avatar" src={u.photos.small ? u.photos.small : userPhoto}
                                     className={s.avatar}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <Button variant="danger" onClick={() => {
                                        props.unsubscribe(u.id)
                                    }}> Unsubscribe</Button>
                                    : <Button variant="success" onClick={() => {
                                        props.subscribe(u.id)
                                    }}> Subscribe</Button>
                                }
                            </div>
                        </span>

                        <span>
                            <span>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {"u.location.cityName"}
                                </div>
                                <div>
                                    {"u.location.country"}
                                </div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;