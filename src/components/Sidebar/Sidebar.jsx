import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.sass'

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink> 
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/dialogs">Dialogs</NavLink> 
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink> 
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink> 
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;