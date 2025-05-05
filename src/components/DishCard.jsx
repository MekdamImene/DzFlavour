import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './DishCard.css'; 

const DishCard = ({ dish }) => {
  const { addToCart } = useContext(CartContext);

  // Set initial states using default props to ensure they are defined
  const [views, setViews] = useState(dish.views || 0);
  const [rating, setRating] = useState(dish.rating || 0);
  const [totalRatings, setTotalRatings] = useState(dish.totalRatings || 0);

  // Handles adding item to the cart
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents card click from triggering here
    addToCart(dish, 1); // Add 1 item to cart
  };

  // Increments view count when the card is clicked
  const handleCardClick = () => {
    setViews(prev => prev + 1);
  };

  // Handles the star rating click logic
  const handleStarClick = (e) => {
    e.stopPropagation(); // Prevents card click from triggering here
    const updatedTotalRatings = totalRatings + 1;
    const updatedRating = ((rating * totalRatings) + 5) / updatedTotalRatings; // Update rating based on new total
    setTotalRatings(updatedTotalRatings);
    setRating(updatedRating);
  };

  return (
    <div className="card dish-card shadow-sm" data-category={dish.category} onClick={handleCardClick}>
      <div className="position-relative">
        <img src={dish.image} className="card-img-top" alt={dish.name} style={{ height: '450px', objectFit: 'cover' }} />
        {dish.popular && (
          <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
            Populaire
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{dish.name}</h5>
          <p className="card-text text-muted" style={{ minHeight: '60px' }}>{dish.description}</p>

          <div className="dish-meta mb-3">
            <div className="dish-rating mb-2" onClick={handleStarClick} style={{ cursor: 'pointer', color: '#ffc107' }}>
              <span className="stars fs-5">
                {/* Render filled stars based on rating */}
                {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
              </span>
              <span className="ms-2 text-dark">{rating.toFixed(1)} ({totalRatings} avis)</span>
            </div>
            <div className="small text-muted">Vues: {views}</div>
            <div className="fw-bold mt-1">{dish.price.toFixed(2)} DA</div>
          </div>
        </div>

        <button className="btn btn-primary w-100 mt-auto" onClick={handleAddToCart}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default DishCard;

