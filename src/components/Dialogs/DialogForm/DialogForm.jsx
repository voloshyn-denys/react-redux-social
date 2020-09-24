import React from 'react'
import { addMessageActionCreator } from '../../../redux/dialogsReducer';

const DialogForm = ({dispatch}) => {
  const textareaElement = React.createRef();

  const handleButtonClick = () => {
    const message = textareaElement.current.value;
    const action = addMessageActionCreator(message);
    
    dispatch(action);
    textareaElement.current.value = '';
  } 

  return (
    <div>
      <textarea className='textarea' placeholder="Write something" ref={textareaElement}  />
      <button className='button' onClick={ handleButtonClick }>Send Message</button>
    </div>
  )
}

export default DialogForm;