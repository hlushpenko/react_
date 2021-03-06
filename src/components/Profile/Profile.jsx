import React from 'react';
import PostsContainer from "./Posts/PostsContainer";
import {Container} from "react-bootstrap";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <Container>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <PostsContainer/>
        </Container>
    )
};
export default Profile;