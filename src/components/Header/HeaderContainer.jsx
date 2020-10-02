import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
import Header from './Header';

const mapSateToProps = (state) => {  
  return { 
    isAuth: state.auth.isAuth, 
    login: state.auth.login
  }
}

export default connect(mapSateToProps, { logoutUser })(Header)