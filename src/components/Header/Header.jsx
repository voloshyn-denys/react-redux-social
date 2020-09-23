import React from 'react';
import s from './Header.module.sass'

const Header = () => {
  return (
    <header className={s.header}>
      <a href="/" className="logo">SOCIAL</a>
    </header>
  )
}

export default Header;