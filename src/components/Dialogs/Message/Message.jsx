import React from 'react';
import s from './Message.module.sass'

const Message = ({ message, userId }) => {
  const friendModeClass = userId ? s.right : '';
  
  return (
    <div className={`${s.message} ${friendModeClass}`}>
      <span className={s.text}>{ message }</span>
    </div>
  )
}

export default Message;