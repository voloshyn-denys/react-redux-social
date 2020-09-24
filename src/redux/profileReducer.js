const ADD_POST = 'ADD_POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: state.posts.length + 1,
        message: action.postMessage, 
        likesCount: 0
      })
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = (postMessage) => 
  ({ type: ADD_POST, postMessage })

export default profileReducer;