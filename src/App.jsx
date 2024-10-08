import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './Styles/styles.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <div className="content-container">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
