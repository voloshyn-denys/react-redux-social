import React from 'react';
import s from './PostForm.module.sass';

const PostForm = ({addPost}) => {

  const textareaElement = React.createRef();

  const handleButtonClick = () => {
    const postMessage = textareaElement.current.value;
    addPost(postMessage);

    textareaElement.current.value = '';
  }

  return (
    <div className={s.form}>
      <textarea
        ref={textareaElement}
        className={s.textarea} 
        placeholder="Write your new post"  
      />
      <button onClick={ handleButtonClick } className='button'>Add post</button>
    </div>
  )
}

export default PostForm;