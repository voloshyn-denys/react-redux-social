import React from 'react';
import s from './Footer.module.sass'

const Footer = () => {
  return (
    <footer className={s.footer}>
      Copyright © 2020 Denys Voloshyn
      <a href="/" className="logo">SOCIAL</a>
    </footer>
  )
}

export default Footer;