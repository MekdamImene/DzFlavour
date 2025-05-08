import React, { useState, useContext } from 'react';
import { FaEye } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './DishCard.css';

const DishCard = ({ dish }) => {
  const { addToCart } = useContext(CartContext);

  const [views, setViews] = useState(() => {
    const savedViews = localStorage.getItem(`dish-${dish.id}-views`);
    return savedViews ? parseInt(savedViews) : 0;
  });
  const [rating, setRating] = useState(dish.rating || 0);
  const [totalRatings, setTotalRatings] = useState(dish.totalRatings || 0);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(dish, 1);
  };

 const handleCardClick = () => {
    const newViews = views + 1;
    setViews(newViews);
    localStorage.setItem(`dish-${dish.id}-views`, newViews.toString());
  };
  const handleStarClick = (e) => {
    e.stopPropagation();
    const updatedTotalRatings = totalRatings + 1;
    const updatedRating = ((rating * totalRatings) + 5) / updatedTotalRatings;
    setTotalRatings(updatedTotalRatings);
    setRating(updatedRating);
  };

  return (
    <Link to={`/dish/${dish.id}`} className="dish-card-link" onClick={handleCardClick}>
      <div className="dish-card" onClick={handleCardClick}>
        <div className="dish-image-wrapper">
          <img src={dish.image} alt={dish.name} className="dish-image" />
          {views < 10 && (
            <span className="dish-badge">
              New
            </span>
          )}
        </div>

        <div className="dish-card-body">
          <div>
            <h5 className="dish-title">{dish.name}</h5>
            <p className="dish-description">{dish.description}</p>

            <div className="dish-meta">
              <div className="dish-rating" onClick={handleStarClick}>
              <div className="dish-views"> {views} <FaEye className="eye-icon" /></div>
                <span className="stars">
                  {'★'.repeat(Math.round(rating))}
                  {'☆'.repeat(5 - Math.round(rating))}
                </span>
                <span className="rating-text">{rating.toFixed(1)} </span>
                
              </div>
             
              <div className="dish-price"> {dish.price} <span className="currency-icon">₫</span>  
              </div>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DishCard;