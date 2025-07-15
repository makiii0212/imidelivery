import React from 'react';
import logo from '../assets/imi.png';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Logo" className="logo" />
        <nav className="header-nav">
          <a href="/">Pocetna</a>
          <a href="/faq">Cesta pitanja</a>
          <a href="/about">O nama</a>
          <button className="signup-button"><a href="/signup">Sign up</a></button>
      </nav>
    </header>
  );
}

export default Header;
