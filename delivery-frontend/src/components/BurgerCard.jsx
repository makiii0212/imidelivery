import './BurgerCard.css';

const BurgerCard = (props) => {
  const { name, image, ingredients } = props;

  return (
    <div className="burger-card">
      <div className="image-container">
        <img src={image} alt={name} className="burger-image"/>
        <button className="plus-button">
          +
        </button>
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
