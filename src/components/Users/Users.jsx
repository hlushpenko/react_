import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from "../assets/img/avatar.jpg";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     this.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img alt="default_avatar" src={u.photos.small ? u.photos.small : userPhoto}
                                     className={s.avatar}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unsubscribe(u.id)
                                    }}> Unsubscribe</button>
                                    : <button onClick={() => {
                                        this.props.subscribe(u.id)
                                    }}> Subscribe</button>
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
    }
}

export default Users;