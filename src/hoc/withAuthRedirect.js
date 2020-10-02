import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = ({auth}) => ({ 
  isAuth: auth.isAuth 
})

const withAuthRedirect = (Component) => {
  const ContainerComponent = (props) => {
    return props.isAuth ? <Component {...props} /> : <Redirect to='/login' />
  }
  return connect(mapStateToProps)(ContainerComponent);
}

export default withAuthRedirect;