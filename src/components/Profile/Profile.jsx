import React from 'react';
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <Posts  dispatch = {props.dispatch}  postsData={props.postsData} />
        </div>
    )
}
export default Profile;