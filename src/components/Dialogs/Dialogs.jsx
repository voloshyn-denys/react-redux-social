import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.sass'

const DialogItem = ({id, name}) => {
  const path = `/dialogs/${id}`;
  return (
    <li className={s.item}>
      <NavLink className={s.link} activeClassName={s.active} to={path}>{name}</NavLink>
    </li>
  )
}

const Message = ({message}) => {
  return (
    <div className={s.message}>
      <span className={s.text}>{message}</span>
    </div>
  )
}

const Dialogs = () => {
  return (
    <section>
      <h1>Dialogs</h1>
      <div className={s.container}>
        <div className={s.dialogs}>
          <ul className={s.dialogs_list}>
            <DialogItem name="Denys" id="1" />
            <DialogItem name="Yana" id="2" />
            <DialogItem name="Iryna" id="3" />
          </ul>
        </div>
        <div className={s.messages}>
          <Message message="Hi!" />
          <Message message="How are you?" />
          <Message message="Everything is alright. Thanks!" />
        </div>
      </div>
    </section>
    
  )
}

export default Dialogs;