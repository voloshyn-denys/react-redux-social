import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-content">
        <Header />
        <Sidebar />
        <main className="content">
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
          <Route path="/dialogs" render={() => <DialogsContainer /> } />
          <Route path="/profile" render={() => <Profile /> } />
        </main>
        <Footer />
      </div>
    </BrowserRouter>  
  );
}

export default App;
