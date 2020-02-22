import React from "react";
import '../style/Navbar.css';


const Navbar = ()=> {
  return (
    <header className="navbar">
      {/* <img className="nav-logo" alt="Bellmarc business logo"/> */}
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}

export default Navbar;