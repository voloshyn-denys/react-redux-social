import React from 'react';
import s from './PostCard.module.sass'

const Post = ({message}) => {
  return (
    <div className={s.card}>
      <p>{message}</p>
    </div>
  )
}

export default Post