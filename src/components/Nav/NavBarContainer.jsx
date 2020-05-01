import React from 'react';
import NavBar from "./NavBar";
import {getAuthUserData} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";

class NavBarContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <NavBar {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.userId
});

export default compose (connect(mapStateToProps, {getAuthUserData})) (NavBarContainer);
