import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.sass'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, addPost }) => {
  return (
    <section className={s.profile}>
      <h1>Profile</h1>
      <ProfileInfo />
      <Posts {...{ posts, addPost }} />
    </section>
  )
}

export default Profile;