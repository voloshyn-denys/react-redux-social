import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';

const initialState = {
  profile: null,
  posts: [
    { id: 1, message: "Why nobody loves me?", likesCount: 112 },
    { id: 2, message: "Are you serious?", likesCount: 38 },
  ]
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.postMessage, 
            likesCount: 0
          }
        ] 
      }

    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
      
    default:
      return state;
  }
}

export const addPostActionCreator = (postMessage) => 
  ({ type: ADD_POST, postMessage })

const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(profile => {
      dispatch(setProfile(profile))
    })
}

export default profileReducer;