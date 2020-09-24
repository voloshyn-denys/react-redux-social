import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.sass'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, dispatch }) => {
  return (
    <section className={s.profile}>
      <h1>Profile</h1>
      <ProfileInfo />
      <Posts posts={posts} dispatch={dispatch} />
    </section>
  )
}

export default Profile;