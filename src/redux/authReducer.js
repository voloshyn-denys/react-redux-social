import { authAPI } from "../api/api";

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
        userId: action.userId,
        login: action.login,
        email: action.email,
        isAuth: Boolean(action.userId)
      }
    default:
      return state
  }
}

const setUserData = (userId, login, email) => {
  return { type: SET_USER_DATA, userId, login, email}
}

export const getAuthMe = () => (dispatch) => {
  return authAPI.getAuthMe()
    .then(data => {
      const { id, email, login } = data.data;
      dispatch(setUserData(id, login, email))
    })
}

export const loginUser = (payload) => (dispatch) => {
  return authAPI.login(payload)
    .then(() => {
      dispatch(getAuthMe())
    })
}

export const logoutUser = () => (dispatch) => {
  return authAPI.loguot()
    .then(() => {
      dispatch(setUserData(null, null, null));
    })
}

export default authReducer;