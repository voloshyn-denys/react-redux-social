import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.sass'

const Header = ({isAuth}) => {
  return (
    <header className={s.header}>
      <NavLink to="/" className="logo">SOCIAL</NavLink>
      <div>
        { !isAuth ? <NavLink to="/login" >Login</NavLink> : null }
      </div>
    </header>
  )
}

export default Header;