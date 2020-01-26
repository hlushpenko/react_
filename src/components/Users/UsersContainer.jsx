import React from 'react';
import {connect} from "react-redux";
import {setUsersAC, subscribeUserAC, unsubscribeUserAC} from "../../redux/reducers/users-reducer";
import Users from "./Users";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (userId) => {
            dispatch(subscribeUserAC(userId));
        },
        unsubscribe: (userId) => {
            dispatch(unsubscribeUserAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;