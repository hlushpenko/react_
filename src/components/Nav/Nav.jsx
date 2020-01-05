import React from 'react';
import s from './Nav.module.css';
import News from "../News/News";
import Settings from "../Settings/Settings";




const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href="/dialogs">Dialogs</a></div>
            <div className={s.item}><a href="/profile">Profile</a></div>
            <div className={s.item}><a href="/news">News</a></div>
            <div className={s.item}><a href="/music">Music</a></div>
            <div className={s.item}><a href="/settings">Settings</a></div>
        </nav>
    )
}
export default Nav;