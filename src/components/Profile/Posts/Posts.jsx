import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";





const Posts = (props) => {
    let posts = props.postsData.map( p => <Post like={p.like} text={p.text}/>);
    return (
        <div>
            My posts:
            {posts}
        </div>
    )
}
export default Posts;