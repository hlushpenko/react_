import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            my posts
            <Post like='1' text="Hello. I am post"/>
            <Post like='56' text="Hell"/>

        </div>
    )
}
export default Posts;