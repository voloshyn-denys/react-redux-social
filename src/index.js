import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { addPost, addMessage, subscribe } from "./redux/state";

const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App {...state} addPost={addPost} addMessage={addMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree();

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
