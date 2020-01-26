import React from 'react';
//import s from './Posts.module.css';
import Post from "./Post/Post";


class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    posts = this.props.postsData.posts.map(p => <Post key={p.id} like={p.like} text={p.text}/>);

    newPostText = React.createRef();

    onAddPost = () => this.props.addPost();

    onPostChange = () => {
        let text = this.newPostText.current.value;
        this.props.updateNewPostText(text);
    };



    render() {
        return (
            <div>
                <div>
                <textarea placeholder="Write post"
                          onChange={this.onPostChange}
                          ref={this.newPostText}
                          value={this.props.postsData.newPostText}/>
                </div>
                <div>
                    <button onClick={this.onAddPost}> Add Post</button>
                </div>
                My posts:
                {this.posts}
            </div>
        );
    }
}

export default Posts;