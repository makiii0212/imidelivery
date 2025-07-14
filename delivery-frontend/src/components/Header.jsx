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
      </nav>
    </header>
  );
}

export default Header;
