import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-content">
        <Header />
        <Sidebar />
        <main className="content">
          <Route path="/dialogs" render={() => <DialogsContainer /> } />
          <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
          <Route path="/users" render={() => <UsersContainer /> } />
        </main>
        <Footer />
      </div>
    </BrowserRouter>  
  );
}

export default App;
