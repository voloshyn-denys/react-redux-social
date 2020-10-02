const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: "Denys" },
    { id: 2, name: "Yana" },
    { id: 3, name: "Iryna" }
  ],
  messages: [
    { id: 1, message: "Hi!", userId: 0 },
    { id: 2, message: "How are you?", userId: 0 },
    { id: 3, message: "Everything is alright. Thanks!", userId: 1 }
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { 
            id: state.messages.length + 1, 
            message: action.newMessage, 
            userId: 0
          }
        ]
      };

    default:
      return state;
  }
}

export const addMessage = (newMessage) => 
  ({ type: ADD_MESSAGE, newMessage })

export default dialogsReducer;