import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.sass'

const DialogItem = ({id, name}) => {
  const path = `/dialogs/${id}`;
  return (
    <li className={s.item}>
      <NavLink className={s.link} activeClassName={s.active} to={path}>{name}</NavLink>
    </li>
  )
}

export default DialogItem;