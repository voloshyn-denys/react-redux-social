import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-content">
      <Header />
      <Sidebar />
      <main className="content">
        <Profile />
      </main>
      <Footer />
    </div>  
  );
}

export default App;
