import React from 'react'

const DialogForm = ({addMessage}) => {
  const textareaElement = React.createRef();

  const handleButtonClick = () => {
    const message = textareaElement.current.value;
    addMessage(message);
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