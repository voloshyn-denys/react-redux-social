import React from 'react';
import { addPostActionCreator } from '../../../../redux/profileReducer';
import PostForm from './PostForm';

const PostFormContainer = ({ store }) => {
  const addPost = (message) => {
    const action = addPostActionCreator(message);
    store.dispatch(action);
  }

  return (
    <PostForm addPost={addPost} />
  )
}

export default PostFormContainer;