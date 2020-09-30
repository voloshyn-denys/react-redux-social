import React from 'react';
import s from "./ProfileInfo.module.sass"
import userSrc from '../../../assets/images/user.svg'

const ProfileInfo = ({ profile }) => {
  const {fullName, photos, lookingForAJobDescription, lookingForAJob, contacts, aboutMe } = profile;
  return <>
    <div className={s.background}>
      <img src="https://media-exp1.licdn.com/dms/image/C5616AQEaQ3o3EARftA/profile-displaybackgroundimage-shrink_200_800/0?e=1606348800&v=beta&t=MWeKs4hDLRlyDZw8UCBtMGTcQ7GO-bgK_OpB8yE0Omc" alt="Profile Background"/>
    </div>
    <div className={s.name}>
      <img className={s.avatar} src={photos && photos.large ? photos.large : userSrc} alt="Photo" />
      <div>
        <h2><strong>{fullName}</strong></h2>
        {aboutMe}
      </div>
    </div>
    {
          lookingForAJob ? <>
            <div className={s.job_status}>Open for new opportunities </div>
            { lookingForAJobDescription ? <div>{lookingForAJobDescription}</div> : null }
          </> : null
        }
    {
      contacts ? (
        <div className={s.information}>
          <ul className={s.list}>
            { 
              contacts.github && <li className={s.item}>
                <b>Github:</b>  {contacts.github}
              </li> 
            }
            { 
              contacts.vk && <li className={s.item}>
                <b>VK:</b> {contacts.vk}
              </li> 
            }
            { 
              contacts.facebook && <li className={s.item}>
                <b>Facebook:</b> {contacts.facebook}
              </li> 
            }
            { 
              contacts.instagram && <li className={s.item}>
                <b>Instagram:</b> {contacts.instagram}
              </li> 
            }
            { 
              contacts.twitter && <li className={s.item}>
                <b>Twitter:</b> {contacts.twitter}
              </li> 
            }
            { 
              contacts.website && <li className={s.item}>
                <b>Website:</b> {contacts.website}
              </li> 
            }
            { 
              contacts.youtube && <li className={s.item}>
                <b>YouTube:</b> {contacts.youtube}
              </li> 
            }
            { 
              contacts.mainLink && <li className={s.item}>
                <b>Main link:</b> {contacts.mainLink}
              </li> 
            }
          </ul>
        </div>
      ) : null
    }
    
  </>
}

export default ProfileInfo;