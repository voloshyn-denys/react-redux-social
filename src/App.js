import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const App = (props) => {
  const store = props.store;
  const { dialogsPage, profilePage } = props.state;

  return (
    <BrowserRouter>
      <div className="app-content">
        <Header />
        <Sidebar />
        <main className="content">
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route path="/dialogs" render={() => <Dialogs state={dialogsPage} store={store} /> } />
          <Route path="/profile" render={() => <Profile state={profilePage} store={store} /> } />
        </main>
        <Footer />
      </div>
    </BrowserRouter>  
  );
}

export default App;
