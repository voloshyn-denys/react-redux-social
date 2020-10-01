import React, { Component } from 'react';
import './App.sass';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import UserSettings from './components/UserSettings/UserSettings';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';

class App extends Component {
  componentDidMount(){
    this.props.initializeApp()
  }

  render() {
    const { initialized } = this.props;

    if (!initialized) return <div />

    return (
      <BrowserRouter>
        <div className="app-content">
          <HeaderContainer />
          <Sidebar />
          <main className="content">
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
