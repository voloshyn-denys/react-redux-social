import React from 'react';
import s from './Posts.module.sass'

import PostCard from './PostCard/PostCard';
import PostForm from './PostForm/PostForm';

const Posts = ({ posts, addPost }) => {
  const postsElements = posts
    .map(({id, likesCount, message}) => <PostCard key={id} {...{ message, likesCount }} />);

  return (
    <div className={s.posts}>
      <PostForm addPost={ addPost }/>
      <h3><strong>Posts</strong></h3>

      { postsElements }
    </div>
  )
}

export default Posts;