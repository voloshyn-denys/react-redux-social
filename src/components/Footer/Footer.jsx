import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.sass'

const Footer = () => {
  return (
    <footer className={s.footer}>
      Copyright © 2020 Denys Voloshyn
      <NavLink to="/" className="logo">SOCIAL</NavLink>
    </footer>
  )
}

export default Footer;