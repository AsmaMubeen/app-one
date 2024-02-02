import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
