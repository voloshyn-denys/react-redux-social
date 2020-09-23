import React from 'react';
import s from './Message.module.sass'

const Message = ({message}) => {
  return (
    <div className={s.message}>
      <span className={s.text}>{message}</span>
    </div>
  )
}

export default Message;