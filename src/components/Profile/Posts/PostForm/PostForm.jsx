import React from 'react';
import s from './PostForm.module.sass';

const PostForm = ({ addPost }) => {
  const textareaElement = React.createRef();

  const handleButtonClick = () => {
    const message = textareaElement.current.value;
    addPost(message)
    textareaElement.current.value = '';
  }

  return (
    <div className={s.form}>
      <textarea
        ref={textareaElement}
        className='textarea' 
        placeholder="Write your new post"  
      />
      <button onClick={ handleButtonClick } className='button'>Add post</button>
    </div>
  )
}

export default PostForm;