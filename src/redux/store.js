import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Why nobody loves me?", likesCount: 112 },
        { id: 2, message: "Are you serious?", likesCount: 38 },
      ]
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Denys" },
        { id: 2, name: "Yana" },
        { id: 3, name: "Iryna" }
      ],
      messages: [
        { id: 1, message: "Hi!", userId: 0 },
        { id: 2, message: "How are you?", userId: 0 },
        { id: 3, message: "Everything is alright. Thanks!", userId: 1 }
      ],
    }
  },

  _noticeSubscriber() { 
    console.log('render') 
  },

  getState() {
    return this._state
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    
    this._noticeSubscriber();
  },

  subscribe(observer) {
    this._noticeSubscriber = observer;
  }
}

export default store;