import React, { Component } from "react";
import { connect } from "react-redux";
import { usersAPI } from '../../api/api';
import { followUser, unfollowUser, setCurrentPage, setTotalUsers, setUsers } from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        const { currentPage, pageCount } = this.props;

        usersAPI.getUsers(currentPage, pageCount)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount);
            })
    }
    
    onPageChanges = (page) => {
        const { pageCount, setCurrentPage, setUsers } = this.props;

        setCurrentPage(page);
        usersAPI.getUsers(page, pageCount)
            .then(data => {
                setUsers(data.items);
            })
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
        followInProgress: state.usersPage.followInProgress
    })
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setTotalUsers,
    setCurrentPage
})(UsersContainer);