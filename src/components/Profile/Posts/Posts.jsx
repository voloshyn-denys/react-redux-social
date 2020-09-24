import React from 'react';
import s from './Posts.module.sass'

import PostCard from './PostCard/PostCard';
import PostFormContainer from './PostForm/PostFormContainer';

const Posts = ({state, store}) => {
  const { posts } = state;

  const postsElements = posts
    .map(({id, likesCount, message}) => <PostCard key={id} {...{ message, likesCount }} />);

  return (
    <div className={s.posts}>
      <PostFormContainer store={store} />
      <h3><strong>Posts</strong></h3>

      { postsElements }
    </div>
  )
}

export default Posts;