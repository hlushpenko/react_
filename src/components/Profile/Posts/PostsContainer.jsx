import React from 'react';
import {addPost, changePost} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = changePost(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPost());
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;