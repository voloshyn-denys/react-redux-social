import React from 'react';
import s from './Profile.module.sass'
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profile }) => {
  if (!profile) return <div>"LOADING..."</div>
  
  return (
    <section className={s.profile}>
      <h1>Profile</h1>
      <ProfileInfo profile={profile} />
      <PostsContainer />
    </section>
  )
}

export default Profile;