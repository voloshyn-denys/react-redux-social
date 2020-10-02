import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.userId;
    this.props.getUserProfile(userId)
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  profile: state.profilePage.profile
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);