import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoURL: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png',
                    subscribe: true,
                    fullName: 'Nickolas',
                    status: 'Like a BOSS!!!',
                    location: {
                        cityName: 'Los Angeles',
                        country: 'USA'
                    },
                },
                {
                    id: 2,
                    photoURL: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-2/256/4-512.png',
                    subscribe: false,
                    fullName: 'Kate',
                    status: 'SAN ANDREAS!!!',
                    location: {
                        cityName: 'Las Vegas',
                        country: 'USA'
                    },
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.avatar} src={u.photoURL}/>
                            </div>
                            <div>
                                {u.subscribe
                                    ? <button onClick={() => {
                                        props.unsubscribe(u.id)
                                    }}> Unsubscribe</button>
                                    : <button onClick={() => {
                                        props.subscribe(u.id)
                                    }}> Subscribe</button>
                                }
                            </div>
                        </span>

                    <span>
                            <span>
                                <div>
                                    {u.fullName}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {u.location.cityName}
                                </div>
                                <div>
                                    {u.location.country}
                                </div>
                            </span>
                        </span>
                </div>
            )
        }
    </div>
};
export default Users;