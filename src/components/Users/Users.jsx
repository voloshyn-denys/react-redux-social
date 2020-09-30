import React from 'react';
import UserCard from './UserCard/UserCard';
import s from './Users.module.sass';

const Users = ({users, toggleFollowStatus, totalUsers, currentPage, onPageChanges, pageCount}) => {
    const usersElements = 
        users.map(user => (
            <UserCard
                key={user.id}
                user={user} 
                toggleFollowStatus={ toggleFollowStatus } 
            />
        ));

    const paginations = [];

    for (let i = 1; i <= Math.ceil(totalUsers / pageCount); i++) {
        paginations.push(i);
    }

    return <>
        <div className={s.users}>
            { usersElements }
        </div>

        <div className={s.pagination}>
            <ul className={s.pagination_list}>
                {
                    paginations.map(item => {
                        const active = currentPage === item;
                        return (
                        <li key={`page-${item}`}
                            className={`${s.pagination_item} ${active ? s.active : ''}`}
                            onClick={() => { onPageChanges(item) }} >
                            { item }
                        </li>)
                    })
                }
            </ul>
        </div>
        
    </>
}

export default Users;