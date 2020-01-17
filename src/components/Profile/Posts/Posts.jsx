import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, changePostActionCreator} from "../../../redux/reducers/profile-reducer";


const Posts = (props) => {
    let posts = props.postsData.posts.map(p => <Post like={p.like} text={p.text}/>);

    let newPostText = React.createRef();

    let addPostClickButton = () => {
        props.dispatch(addPostActionCreator());
    };

    let postOnChange = () => {
        let text = newPostText.current.value;
        props.dispatch(changePostActionCreator(text));
    };

    return (
        <div>
            <div>
                <textarea placeholder="Write post"
                          onChange={postOnChange}
                          ref={newPostText}
                          value={props.postsData.newPostText}/>
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