import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
  <div class="logo">
    <a href="#">Cinephile</a>
  </div>
  <ul class="nav-links">
    
    <li><a href="#">Filme</a></li>
    <li><a href="#">Seriale TV</a></li>
    <li><a href="#">Desene animate</a></li>
    <li><a href="#">Genuri</a></li>
    <li><a href="#">Căutare</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
</nav>
  );
}

export default NavBar;
