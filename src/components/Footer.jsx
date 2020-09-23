import React from 'react';
import s from './Footer.module.sass'

const Footer = () => {
  return (
    <footer className={s.footer}>
      Copyright © 2020 Denys Voloshyn
      <span className="logo">SOCIAL</span>
    </footer>
  )
}

export default Footer;