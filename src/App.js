import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bm-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        */}
          <Navbar />
          <Home />
          <Footer />
      </header>
    </div>
  );
}

export default App;
