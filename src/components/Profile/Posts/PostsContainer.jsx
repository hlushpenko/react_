import React from 'react';
import {addPostActionCreator, changePostActionCreator} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";


const PostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                let updateNewPostText = (text) => {
                    let action = changePostActionCreator(text);
                    store.dispatch(action);
                };

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                };
                return (<Posts updateNewPostText={updateNewPostText}
                               addPost={addPost}
                               postsData={state.profilePage}/>)
            }
        }
    </StoreContext.Consumer>;
};
export default PostsContainer;