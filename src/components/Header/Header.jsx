import React from 'react';
import s from './Header.module.sass'

const Header = () => {
  return (
    <header className={s.header}>
      <span className="logo">SOCIAL</span>
    </header>
  )
}

export default Header;