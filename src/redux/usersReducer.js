import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_FOLLOW_PROGRESS = 'SET_FOLLOW_PROGRESS';

const initialState = {
    users: [],
    currentPage: 1,
    totalUsers: null,
    pageCount: 5,
    followInProgress: []
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsers: action.totalUsers
            }

        case SET_FOLLOW_PROGRESS:
            return {
                ...state,
                followInProgress: action.followMode
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(element => element != action.userId)
            }

        default:
            return state;
    }
}

export const toggleFollowAC = (userId) => {
    return { type: TOGGLE_FOLLOW_USER, userId }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPage = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}

export const setTotalUsers = (totalUsers) => {
    return { type: SET_TOTAL_USERS, totalUsers }
}

export const setFollowProgress = (followMode, userId) => {
    return {type: SET_FOLLOW_PROGRESS, followMode, userId}
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(setFollowProgress(true, userId))
        usersAPI.follow(userId)
            .then(() => {
                dispatch(setFollowProgress(false, userId))
                dispatch(toggleFollowAC(userId))
            })
    }
}

export const unfollowUser = (userId) => {
    
    return (dispatch) => {
        dispatch(setFollowProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(() => {
                dispatch(setFollowProgress(false, userId))
                dispatch(toggleFollowAC(userId))
            })
    }
}

export default usersReducers;