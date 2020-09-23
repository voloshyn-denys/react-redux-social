import React from 'react';
import Posts from './Posts/Posts';
import './Profile.sass'

const Profile = () => {
  return (
    <section className="profile">
      <h1>Profile</h1>
      
      <div className="profile__background">
        <img src="https://media-exp1.licdn.com/dms/image/C5616AQEaQ3o3EARftA/profile-displaybackgroundimage-shrink_200_800/0?e=1606348800&v=beta&t=MWeKs4hDLRlyDZw8UCBtMGTcQ7GO-bgK_OpB8yE0Omc" alt="Profile Background"/>
      </div>
      <div className="profile__name">
        <img className="profile__avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQFOVHlTCNeILA/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=FrbgEqJX7yelXdtHVI3tyoP70SwKqSXY0szfMbmEiWU" alt="Photo"/>
        <div>
          <h2><strong>Denys Voloshyn</strong></h2>
          <div>Frontend Developer</div>
        </div>
      </div>
      <div className="profile__information">
        <ul className="profile__list">
          <li className="profile__list__item">From Ukraine </li>
          <li className="profile__list__item">Was born 14 April 1993</li>
          <li className="profile__list__item">Phone number: <a href="tel:+380683877646">+380683877646</a> </li>
          <li className="profile__list__item">Email: <a href="mailto:voloshyn.denys@gmail.com">voloshyn.denys@gmail.com</a></li>
        </ul>
      </div>

      <Posts />
    </section>
  )
}

export default Profile;