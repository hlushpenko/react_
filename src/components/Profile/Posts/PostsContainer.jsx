import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/reducers/profile-reducer";
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
            let action = changePostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;