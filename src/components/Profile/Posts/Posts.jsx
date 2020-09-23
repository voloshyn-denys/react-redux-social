import React from 'react';
import s from './Posts.module.sass'

import PostCard from './PostCard/PostCard';
import PostForm from './PostForm/PostForm';

const Posts = () => {
  return (
    <div className={s.posts}>
      <PostForm />

      <h3><strong>Posts</strong></h3>

      <PostCard message='Why nobody loves me?' />
      <PostCard message='Are you serious?' />
    </div>
  )
}

export default Posts;