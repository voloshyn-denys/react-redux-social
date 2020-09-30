import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { setProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.userId;

    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setProfile(data);
      })
  }

  componentWillUnmount(){
    this.props.setProfile(null);
  }

  render() {
    return !this.props.isAuth && !this.props.match.params.userId ? (
      <Redirect to="/login" />
    ) : (
      <Profile profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {
  setProfile
})(withRouter(ProfileContainer)) 