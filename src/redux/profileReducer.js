const ADD_POST = 'ADD_POST';

const initialState = {
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
      
    default:
      return state;
  }
}

export const addPostActionCreator = (postMessage) => 
  ({ type: ADD_POST, postMessage })

export default profileReducer;