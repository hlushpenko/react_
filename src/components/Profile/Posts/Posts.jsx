import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";
import {Alert, Button, Form} from "react-bootstrap";


const Posts = (props) => {
    let posts = props.postsData.posts.map(p =>
        <Post key={p.id}
              like={p.like}
              text={p.text}/>
    );

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
            <Alert variant='secondary'>
                <Form>
                    <Form.Group controlId="posts">
                        <Form.Label>Додайте новий пост на вашу сторінку</Form.Label>
                        <Form.Control placeholder="Текст поста"
                                      onChange={onPostChange}
                                      ref={newPostText}
                                      value={props.postsData.newPostText}/>
                        <Form.Text className="text-muted">
                            Пост буде прив'язано до вашого профілю, його можуть бачити всі зареєстровані користувачі
                        </Form.Text>
                    </Form.Group>
                    <Button variant='outline-primary' onClick={onAddPost}> Add Post</Button>
                </Form>
            </Alert>

            My posts:
            {posts}
        </>
    )
}
export default Posts;