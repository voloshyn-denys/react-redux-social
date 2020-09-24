import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.sass'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state, store }) => {
  return (
    <section className={s.profile}>
      <h1>Profile</h1>
      <ProfileInfo />
      <Posts state={state} store={store} />
    </section>
  )
}

export default Profile;