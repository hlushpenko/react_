import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {
    let posts = props.postsData.map(p => <Post like={p.like} text={p.text}/>);

    let newPostText = React.createRef();

    let addPostClickButton = () => props.addPost(newPostText.current.value);

    return (
        <div>
            <div>
                <textarea ref = {newPostText}> </textarea>
            </div>
            <div>
                <button onClick={addPostClickButton}> Add Post</button>
            </div>
            My posts:
            {posts}
        </div>
    )
}
export default Posts;