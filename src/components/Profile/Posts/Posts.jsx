import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {
    let posts = props.postsData.posts.map(p => <Post like={p.like} text={p.text}/>);

    let newPostText = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <div>
                <textarea placeholder="Write post"
                          onChange={onPostChange}
                          ref={newPostText}
                          value={props.postsData.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}> Add Post</button>
            </div>
            My posts:
            {posts}
        </div>
    )
}
export default Posts;