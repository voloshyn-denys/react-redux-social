import React from 'react';
import s from './PostCard.module.sass'

const Post = ({message, likesCount}) => {
  return (
    <div className={s.card}>
      <p>{message}</p>

      <div className={s.bottom}>{ likesCount } likes </div>
    </div>
  )
}

export default Post