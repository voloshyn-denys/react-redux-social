import React from 'react';
import s from "./ProfileInfo.module.sass"

const ProfileInfo = () => {
  return <>
    <div className={s.background}>
      <img src="https://media-exp1.licdn.com/dms/image/C5616AQEaQ3o3EARftA/profile-displaybackgroundimage-shrink_200_800/0?e=1606348800&v=beta&t=MWeKs4hDLRlyDZw8UCBtMGTcQ7GO-bgK_OpB8yE0Omc" alt="Profile Background"/>
    </div>
    <div className={s.name}>
      <img className={s.avatar} src="https://media-exp1.licdn.com/dms/image/C4D03AQFOVHlTCNeILA/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=FrbgEqJX7yelXdtHVI3tyoP70SwKqSXY0szfMbmEiWU" alt="Photo" />
      <div>
        <h2><strong>Denys Voloshyn</strong></h2>
        <div>Frontend Developer</div>
      </div>
    </div>
    <div className={s.information}>
      <ul className={s.list}>
        <li className={s.item}>From Ukraine</li>
        <li className={s.item}>Was born 14 April 1993</li>
        <li className={s.item}>Phone number: <a href="tel:+380683877646">+380683877646</a> </li>
        <li className={s.item}>Email: <a href="mailto:voloshyn.denys@gmail.com">voloshyn.denys@gmail.com</a></li>
      </ul>
    </div>
  </>
}

export default ProfileInfo;