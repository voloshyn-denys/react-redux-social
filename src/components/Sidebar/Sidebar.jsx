import React from 'react';
import s from './Sidebar.module.sass'

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={`${s.link} ${s.active}`} href="/profile">Profile</a> 
        </li>
        <li className={s.item}>
          <a className={s.link} href="/messages">Dialogs</a> 
        </li>
        <li className={s.item}>
          <a className={s.link} href="/news">News</a> 
        </li>
        <li className={s.item}>
          <a className={s.link} href="/music">Music</a> 
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;