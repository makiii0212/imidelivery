import React, { useEffect, useState } from 'react';
import logo from '../assets/imi.png';
import './Header.css';
import Cart from './Cart';

function Header() {

  return (
    <header className="app-header">
      <img src={logo} alt="Logo" className="logo" />

      <nav className="header-nav">
        <a href="/">Pocetna</a>
        <a href="/faq">Cesta pitanja</a>
        <a href="/about">O nama</a>
          <button className="signup-button">
            <a href="http://localhost:8081/oauth2/authorization/google">Sign up</a>
          </button>
      </nav>
    </header>
  );
}

export default Header;
