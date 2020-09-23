import React from 'react';
import './App.sass';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';

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
