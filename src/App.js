import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const App = ({dialogsPage, profilePage, addPost, addMessage}) => {
  return (
    <BrowserRouter>
      <div className="app-content">
        <Header />
        <Sidebar />
        <main className="content">
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route path="/dialogs" render={() => <Dialogs {...dialogsPage} addMessage={addMessage} /> } />
          <Route path="/profile" render={() => <Profile {...profilePage} addPost={addPost} /> } />
        </main>
        <Footer />
      </div>
    </BrowserRouter>  
  );
}

export default App;
