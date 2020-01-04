import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <Posts/>
        </div>
    )
}
export default Content;