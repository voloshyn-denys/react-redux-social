import * as axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ProfileAPI } from '../../api/api';
import { setProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params;

    ProfileAPI.getProfile(userId)
      .then(data => {
        this.props.setProfile(data);
      })
  }

  componentWillUnmount(){
    this.props.setProfile(null);
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})



export default connect(mapStateToProps, {
  setProfile
})(withRouter(ProfileContainer)) 