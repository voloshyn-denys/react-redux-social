import React, { Component } from "react";
import { connect } from "react-redux";
import { followUser, unfollowUser, getUsers } from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        const { currentPage, pageCount, getUsers } = this.props;
        getUsers(currentPage, pageCount);
    }
    
    onPageChanges = (page) => {
        const { pageCount, getUsers } = this.props;
        getUsers(page, pageCount, page);
    }

    render() {
        return <Users { ...this.props } onPageChanges={this.onPageChanges} />
    }
}

const mapStateToProps = (state) => {
    return ({
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers, 
        currentPage: state.usersPage.currentPage,
        pageCount: state.usersPage.pageCount,
        followInProgress: state.usersPage.followInProgress,
        paginationLength: state.usersPage.paginationLength
    })
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers
})(UsersContainer);