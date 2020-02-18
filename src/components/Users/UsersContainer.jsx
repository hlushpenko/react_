import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage, setUsers, setUsersTotalCount,
    subscribe, toggleIsFetching, unsubscribe
} from '../../redux/reducers/users-reducer';
import Users from './Users';
import Loading from "../Loading/Loading";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Loading/> : null}

            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unsubscribe={this.props.unsubscribe}
                   subscribe={this.props.subscribe}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default connect(mapStateToProps, {
        subscribe, unsubscribe, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching,
    }
)(UsersContainer);