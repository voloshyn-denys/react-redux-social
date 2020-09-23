import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.sass'

const Dialogs = ({ dialogs, messages }) => {

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