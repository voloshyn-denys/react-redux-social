const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userId: action.data.userId,
        login: action.data.login,
        email: action.data.email,
        isAuth: Boolean(action.data.userId)
      }
    default:
      return state
  }
}

export const setUserData = (userId, login, email) => {
  return { type: SET_USER_DATA, data: {userId, login, email} }
}

export default authReducer;