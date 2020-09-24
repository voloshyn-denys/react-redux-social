import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import { Provider } from 'react-redux';

const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree();

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
