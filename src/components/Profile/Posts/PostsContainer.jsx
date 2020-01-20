import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {

    let updateNewPostText = (text) => {
        let action = changePostActionCreator(text);
        props.dispatch(action);
    };

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    return <Posts updateNewPostText={updateNewPostText}
                  addPost={addPost}
                  postsData={props.postsData}/>;
};
export default PostsContainer;