import React, { Component } from "react";
import { connect } from "react-redux";
import Header from './Header';

class HeaderContainer extends Component {
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

export default connect(mapSateToProps, {})(HeaderContainer)