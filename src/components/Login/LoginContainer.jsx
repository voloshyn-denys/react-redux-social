import { connect } from "react-redux";
import Login from "./Login";
import React, { Component } from "react";
import { loginUser } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const LoginContainer = (props) => {
  return props.isAuth
    ? <Redirect to="/profile"/> 
    : <Login {...props}  />
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginUser })(LoginContainer)