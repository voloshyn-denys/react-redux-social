import React from 'react';
import s from './PostForm.module.sass';

const PostForm = () => {
  return (
    <form className={s.form}>
      <textarea className={s.textarea} placeholder="Write your new post" name="" id="" />
      <button className='button'>Add post</button>
    </form>
  )
}

export default PostForm;