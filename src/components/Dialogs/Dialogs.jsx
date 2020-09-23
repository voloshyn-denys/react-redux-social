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

  const dialogs = [
    { id: 1, name: "Denys" },
    { id: 2, name: "Yana" },
    { id: 3, name: "Iryna" }
  ]

  const messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Everything is alright. Thanks!" }
  ]

  const dialogsElements = dialogs
    .map(({id, name}) => <DialogItem key={id} {...{name, id}} />)
  
  const messagesElements = messages
    .map(({id, message}) => <Message key={id} {...{message}} />)

  return (
    <section>
      <h1>Dialogs</h1>
      <div className={s.container}>
        <div className={s.dialogs}>
          <ul className={s.dialogs_list}>
            { dialogsElements }
          </ul>
        </div>
        <div className={s.messages}>
          { messagesElements }
        </div>
      </div>
    </section>
    
  )
}

export default Dialogs;