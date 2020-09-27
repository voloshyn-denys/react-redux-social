const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';

const initialState = {
    users: [
        {
            id: 1,
            name: "Dmitry",
            description: "I'm looking for a job",
            location: {
                country: "Ukraine",
                city: "Vinnytsia",
            },
            followed: false
        },
        {
            id: 2,
            name: "Ihor",
            description: "Yo!",

            location: {
                country: "Ukraine",
                city: "Kyiv",
            },
            followed: true
        }
    ]
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
        default:
            return state;
    }
}

export const followUserCreator = (userId) => {
    return { type: TOGGLE_FOLLOW_USER, userId }
}

export default usersReducers;