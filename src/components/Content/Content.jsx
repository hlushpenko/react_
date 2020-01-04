import React from 'react';
import s from './Content.module.css';
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
            <div>
                my posts
                <div className={s.item}>
                    new post
                </div>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>

        </div>
    )
}
export default Content;