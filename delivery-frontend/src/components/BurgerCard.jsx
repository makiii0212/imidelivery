import React, { useEffect, useState } from 'react';
import './BurgerCard.css';

const BurgerCard = ({ name, image, ingredients, addToCart }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
          fetch('http://localhost:8081/user', {
          credentials: 'include',
          })
          .then((result) => {
              if (!result.ok) throw new Error();
              return result.json();
          })
          .then((user) => setUser(user))
          .catch(() => setUser(null));
      }, []);
  return (
    <div className="burger-card">
      <div className="image-container">
        <img src={image} alt={name} className="burger-image"/>
        <button className="plus-button" onClick={() =>addToCart(name)}>+</button>
      </div>
      <div className="ingredients-container">
        <h4>{name}</h4>
        <ul>
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerCard;
