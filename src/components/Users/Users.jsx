import React from 'react';
import s from './Users.module.sass';

const Users = ({users, toggleFollowStatus}) => {
    const usersElements = users.map(user => {
        const { id, name, description, followed, location } = user;
        const followText = followed ? "Unfollow" : "Follow";

        return (<div className={s.user_card} key={ id }>
            <h4>{ name }</h4>
            <p>{ description }</p>
            <div>
                { location.city }, { location.country }
            </div>
            <button 
                className="button"
                onClick={() => { toggleFollowStatus(id) }}
            >
                { followText }
            </button>
        </div>)
    });

    return (
        <div className={s.users}>
            { usersElements }
        </div>
    )
}

export default Users;