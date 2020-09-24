import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.sass';
import DialogFormContainer from './DialogForm/DialogFormContainer';

const Dialogs = ({ state, store }) => {
  const { dialogs, messages } = state;
  
  const emptyMessage = 'There are no messages!'

  const dialogsElements = dialogs
    .map(({ id, name }) => <DialogItem key={id} id={id} name={name}/>)
  
  const messagesElements = messages
    .map(({ id, message, userId }) => <Message key={id} message={message} userId={userId} />)

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
          { messagesElements.length ? messagesElements : emptyMessage }
          <DialogFormContainer store={store} />
        </div>
      </div>
    </section>
    
  )
}

export default Dialogs;