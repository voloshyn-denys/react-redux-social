import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.sass'

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/profile">My Profile</NavLink> 
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/dialogs">Dialogs</NavLink> 
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/users">Users</NavLink> 
        </li>
        <li className={s.item}>
          <NavLink className={s.link} activeClassName={s.active} to="/settings">Settings</NavLink> 
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;