import React from 'react';
import s from './UserCard.module.sass';
import userSrc from '../../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';

const UserCard = ({ user, toggleFollowStatus }) => {
    const { id, name, status, followed, photos } = user;
    const followText = followed ? "Unfollow" : "Follow";

    return (
        <div className={s.user_card}>
            <div>
                <NavLink to={`/profile/${id}`} >
                    <h4>{ name }</h4>
                    <img className={s.user_image} src={photos.small || userSrc} alt={name}/>
                </NavLink>
                { status ? <p>{ status }</p> : null }
            </div>
            <button 
                className="button"
                onClick={() => { toggleFollowStatus(id) }}
            >
                { followText }
            </button>
        </div>
    )
}

export default UserCard;