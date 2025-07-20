import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Burgers.css';
import BurgerCard from './BurgerCard';
import burger1 from '../assets/beef-burger.jpg';
import burger2 from '../assets/big.jpg';
import burger3 from '../assets/burger.jpg';
import burger4 from '../assets/chicken-big.jpg';
import burger5 from '../assets/chicken-sandwich.jpg';
import burger6 from '../assets/chicken.jpg';
import burger7 from '../assets/double.jpg';
import burger8 from '../assets/triple.jpg';

const burgers = [
  {
    name: 'Imi Burger',
    image: burger1,
    ingredients: ['Junetina', 'Luk', 'Paradajz', 'Dupli Cheddar', 'Salata', 'Sos'],
  },
  {
    name: 'Big Mac',
    image: burger2,
    ingredients: ['Govedina', 'Big Mac sos', 'Cheddar', 'Komadici luka', 'Iceberg salata'],
  },
  {
    name: 'Beef Burger',
    image: burger3,
    ingredients: ['Govedina', 'Zelena salata', 'Luk', 'Paradajz', 'Burger sos'],
  },
  {
    name: 'Chicken Big Burger',
    image: burger4,
    ingredients: ['Pileci file x2', 'Iceberg salata', 'Cheddar sir', 'Majonez', 'Kiseli krastavcici', 'Paradajz'],
  },
  {
    name: 'Chicken Sandwich Burger',
    image: burger5,
    ingredients: ['Pileci file', 'Iceberg salata', 'Ljuti sos', 'Tartar sos', 'Paradajz', 'Luk', 'Kiseli krastavcici'],
  },
  {
    name: 'Chicken Burger',
    image: burger6,
    ingredients: ['Pileci file', 'Iceberg salata', 'Cheddar sir', 'Majonez', 'Kiseli krastavcici', 'Paradajz'],
  },
  {
    name: 'Double Cheese Burger',
    image: burger7,
    ingredients: ['100% Govedina x2', 'Cheddar', 'Senf', 'Kiseli krastavac', 'Kecap', 'Komadici luka'],
  },
  {
    name: 'Triple Cheese Burger',
    image: burger8,
    ingredients: ['100% Govedina x3', 'Cheddar', 'Senf', 'Kiseli krastavac', 'Kecap', 'Komadici luka'],
  },
];

const Burgers = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="burger-list">
      {burgers.map((burger, i) => (
        <BurgerCard
          key={i}
          name={burger.name}
          image={burger.image}
          ingredients={burger.ingredients}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Burgers;