import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.sass'

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/" className="logo">SOCIAL</NavLink>
    </header>
  )
}

export default Header;