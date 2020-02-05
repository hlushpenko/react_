import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";
import {Button, Form} from "react-bootstrap";


const Posts = (props) => {
    let posts = props.postsData.posts.map(p => <Post key={p.id} like={p.like} text={p.text}/>);

    let newPostText = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPostText(text);
    };

    return (
        <>
            <Form>
                <Form.Group controlId="posts">
                    <Form.Control placeholder="Write post"
                                  onChange={onPostChange}
                                  ref={newPostText}
                                  value={props.postsData.newPostText}/>

                    <Button onClick={onAddPost}> Add Post</Button>
                </Form.Group>
            </Form>
            My posts:
            {posts}
        </>
    )
}
export default Posts;