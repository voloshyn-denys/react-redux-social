import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleFollowStatus, setCurrentPage, setTotalUsers, setUsers } from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        })
    }
    
    onPageChanges = (page) => {
        this.props.setCurrentPage(page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageCount}`).then(response => {
            this.props.setUsers(response.data.items);
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