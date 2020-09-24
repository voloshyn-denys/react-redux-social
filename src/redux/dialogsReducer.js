const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push({ 
        id: state.messages.length + 1, 
        message: action.newMessage, 
        userId: 0
      })
      return state;

    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessage) => 
  ({ type: ADD_MESSAGE, newMessage })

export default dialogsReducer;