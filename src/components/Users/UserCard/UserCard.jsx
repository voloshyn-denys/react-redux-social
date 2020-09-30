import React from 'react';
import s from './UserCard.module.sass';
import userSrc from '../../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';

const UserCard = ({ user, unfollowUser, followUser, followInProgress }) => {
    const { id, name, status, followed, photos } = user;

    const followText = followed ? "Unfollow" : "Follow";

    const handleButtonClick = (userId) => {
        if (followed) { unfollowUser(userId) } 
        else { followUser(userId) }
    }

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
                disabled={followInProgress.some(element => element === id)}
                className="button"
                onClick={() => { handleButtonClick(id) }}
            >
                { followText }
            </button>
        </div>
    )
}

export default UserCard;