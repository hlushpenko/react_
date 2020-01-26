import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from "../assets/img/avatar.jpg";

 class Users extends React.Component {

     constructor(props) {
         super(props);

             axios.get("https://social-network.samuraijs.com/api/1.0/users")
                 .then(response => {
                     this.props.setUsers(response.data.items);
                 });

     }

    render() {
        return (
            <div>
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
        );
    }
}

export default Users;