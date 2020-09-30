import React, { Component } from "react";
import { connect } from "react-redux";
import Header from './Header';
import { getAuthMe } from '../../redux/authReducer'

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthMe()
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapSateToProps = (state) => {  
  return { 
    isAuth: state.auth.isAuth, 
    login: state.auth.login
  }
}

export default connect(mapSateToProps, { getAuthMe })(HeaderContainer)