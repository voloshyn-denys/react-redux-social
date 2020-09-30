import React, { Component } from "react";
import { connect } from "react-redux";
import { UsersAPI } from '../../api/api';
import { toggleFollowStatus, setCurrentPage, setTotalUsers, setUsers } from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        const { currentPage, pageCount } = this.props;

        UsersAPI.getUsers(currentPage, pageCount)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsers(data.totalCount);
            })
    }
    
    onPageChanges = (page) => {
        const { pageCount, setCurrentPage, setUsers } = this.props;

        setCurrentPage(page);
        UsersAPI.getUsers(page, pageCount)
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
        pageCount: state.usersPage.pageCount
    })
}

export default connect(mapStateToProps, {
    toggleFollowStatus,
    setUsers,
    setTotalUsers,
    setCurrentPage
})(UsersContainer);