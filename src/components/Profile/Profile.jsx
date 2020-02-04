import React from 'react';
// import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";
import {Container, Jumbotron} from "react-bootstrap";
import Loading from "../Loading/Loading";

const Profile = (props) => {
    if(!props.profile){
        return <Loading/>
    }

    return <Container>
        <div>
            <img
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                alt=""/>
        </div>
        <div>

            <img src={props.profile.photos.large} alt=""/>
            ava + description
        </div>
        <PostsContainer/>
    </Container>
};
export default Profile;