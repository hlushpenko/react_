import React from 'react';
import PostsContainer from "./Posts/PostsContainer";
import {Container} from "react-bootstrap";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Loading from "../Loading/Loading";

const Profile = (props) => {
    if (!props.profile) {
        return <Loading/>
    }
    return <Container>
        <ProfileInfo profile={props.profile} />
        <PostsContainer/>
    </Container>
};
export default Profile;