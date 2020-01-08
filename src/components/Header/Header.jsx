import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://images-na.ssl-images-amazon.com/images/I/614JNmcFb3L.png' alt="logo"/>
        </header>
    )
}
export default Header;