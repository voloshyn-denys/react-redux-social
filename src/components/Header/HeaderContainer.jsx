import React, { Component } from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import Header from './Header';
import { setUserData } from '../../redux/authReducer'

class HeaderContainer extends Component {
  componentDidMount() {
    const { setUserData } = this.props;

    authAPI.getAuthMe()
      .then(data => {
        const { id, email, login } = data.data;
        setUserData(id, login, email)
      })
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapSateToProps = (state) => {  
  return { isAuth: state.auth.isAuth }
}

export default connect(mapSateToProps, {
  setUserData
})(HeaderContainer)