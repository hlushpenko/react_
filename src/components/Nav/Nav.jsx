import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {Icon, Menu} from "antd";



const Nav = () => {

    return (
        <Menu mode="horizontal"   theme="dark" style={{ lineHeight: '64px' }} className={s.nav}>

            <Menu.Item key="dialogs">
                <NavLink to="/dialogs"> <Icon type="mail"/> Dialogs</NavLink>
            </Menu.Item>

            <Menu.Item key="profile">
                <NavLink to="/profile"> <Icon type="profile"/>Profile</NavLink>
            </Menu.Item>

            <Menu.Item key="users">
                <NavLink to="/users"> <Icon type="user"/>Users</NavLink>
            </Menu.Item>

            <Menu.Item key="music">
                <NavLink to="/music"> <Icon type="play-circle"/>Music</NavLink>
            </Menu.Item>

            <Menu.Item key="settings">
                <NavLink to="/settings"> <Icon type="setting"/>Settings</NavLink>
            </Menu.Item>
        </Menu>
    )
};
export default Nav;