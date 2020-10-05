import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import UserCard from './UserCard/UserCard';
import s from './Users.module.sass';

const Users = ({users, followUser, unfollowUser, totalUsers, currentPage, onPageChanges, pageCount, followInProgress}) => {
    const usersElements = 
        users.map(user => (
            <UserCard
                key={user.id}
                user={user} 
                followUser={followUser}
                unfollowUser={unfollowUser}
                followInProgress={followInProgress}
            />
        ));

    

    return <>
        <div className={s.users}>
            { usersElements }
        </div>

        <Pagination
            totalItems={totalUsers}
            itemsCount={pageCount}
            currentItem={currentPage}
            onChange={onPageChanges}
            itemsLength={6}
        />
    </>
}

export default Users;