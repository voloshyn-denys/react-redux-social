import React from 'react';
import './App.sass';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import UserSettings from './components/UserSettings/UserSettings';
import LoginContainer from './components/Login/LoginContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-content">
        <HeaderContainer />
        <Sidebar />
        <main className="content">
          <Route exact path="/" render={() => <Redirect to='/my-profile' /> } />

          <Route path="/my-profile" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer /> } />
          <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
          <Route path="/users" render={() => <UsersContainer /> } />

          <Route path="/login" render={() => <LoginContainer /> } />
          <Route path="/settings" render={() => <UserSettings /> } />
        </main>
        <Footer />
      </div>
    </BrowserRouter>  
  );
}

export default App;
