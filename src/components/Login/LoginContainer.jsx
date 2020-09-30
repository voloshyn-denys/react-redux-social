import { connect } from "react-redux";
import Login from "./Login";
// import { loginUser, setUserData } from '../../redux/authReducer';
import React, { Component } from "react";

class LoginContainer extends Component {
  render() {
    return <Login {...this.props}  />
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {  })(LoginContainer)