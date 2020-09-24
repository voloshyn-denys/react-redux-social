import React from 'react'
import { addMessageActionCreator } from '../../../redux/dialogsReducer';
import DialogForm from './DialogForm';

const DialogFormContainer = ({store}) => {
  const addMessage = (message) => {
    const action = addMessageActionCreator(message);
    store.dispatch(action);
  } 

  return (
    <DialogForm addMessage={addMessage} />
  )
}

export default DialogFormContainer;