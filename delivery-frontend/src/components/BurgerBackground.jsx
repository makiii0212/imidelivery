import React from 'react';
import burger from '../assets/beef-burger.jpg';
import './BurgerBackground.css';

function BurgerBackground() {
  return (
    <div className="app-burger-background">
      <img src={burger} alt="Logo" className="burger" />
      <h1>
        Vi narucujete,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <span className="imi-bold">IMI</span> dostavlja🚗
      </h1>
      <button className="menu">🔍Istrazite nasu ponudu</button>
    </div>
  );
}

export default BurgerBackground;