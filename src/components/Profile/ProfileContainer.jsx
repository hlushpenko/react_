import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/reducers/profile-reducer";
import {withRouter} from "react-router-dom";
import Loading from "../Loading/Loading";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    render() {
        if (!this.props.profile) {
            return <Loading/>;
        }
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);