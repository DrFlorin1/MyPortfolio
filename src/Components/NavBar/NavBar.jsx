
import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="#">Cinephile</a>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Films</a></li>
        <li><a href="#">Seriale TV</a></li>
        <li><a href="#">Desene animate</a></li>
        <li><a href="#">Gens</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
