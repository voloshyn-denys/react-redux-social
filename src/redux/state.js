let renderEntireTree = () => { console.log('render') }

const state = {
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
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Everything is alright. Thanks!" }
    ],
  }
};

export const addPost = (postMessage) => {
  state.profilePage.posts.push({ 
    id: state.profilePage.posts.length + 1, 
    message: postMessage, 
    likesCount: 0
  })
  renderEntireTree();
}

export const subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;