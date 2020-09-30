import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.sass'

const Header = ({isAuth, login}) => {
  return (
    <header className={s.header}>
      <NavLink to="/" className="logo">SOCIAL</NavLink>
      <div>
        { !isAuth ? <NavLink to="/login" >Login</NavLink> : <strong>{ login }</strong> }
      </div>
    </header>
  )
}

export default Header;