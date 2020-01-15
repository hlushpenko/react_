import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {
    let posts = props.postsData.map(p => <Post like={p.like} text={p.text}/>);

    let newPostText = React.createRef();

    let addPostClickButton = () => {
        props.dispatch({type: 'ADD-POST'});

    };

    let postOnChange = () => {
        let text = newPostText.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action)
    };

    return (
        <div>
            <div>
                <textarea onChange={postOnChange}
                          ref={newPostText}
                          value={props.newPostText}/>
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