import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.sass'

const Header = ({isAuth, login, logoutUser}) => {
  return (
    <header className={s.header}>
      <NavLink to="/" className="logo">SOCIAL</NavLink>
      <div>
        { 
        !isAuth ? 
          <NavLink to="/login">Login</NavLink> : 
          <>
            <strong>{ login }</strong> {' '}
            <button className='button' onClick={logoutUser}>Loguot</button> 
          </> 
        }
      </div>
    </header>
  )
}

export default Header;