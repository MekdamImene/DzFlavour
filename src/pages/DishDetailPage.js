// DishDetailPage.js - Page de détail d'un plat

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMenu } from '../context/MenuContext';
import { useCart } from '../context/CartContext';
import './DishDetailPage.css';
import { FaEye } from "react-icons/fa";
import { MdSell } from "react-icons/md";
// Composants
import NutritionInfo from '../components/NutritionInfo';
import ReviewList from '../components/reviews/ReviewList';
import ReviewForm from '../components/reviews/ReviewForm';

const DishDetailPage = () => {
  const { dishId } = useParams();
  const { getDishById, isLoading, error } = useMenu();
  const { addToCart } = useCart();
  const [dish, setDish] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [views, setViews] = useState(0);
  

  
  useEffect(() => { 
    if (!isLoading) { 
      const foundDish = getDishById(dishId); 
      
      
    if (foundDish) {
      const savedSold = parseInt(localStorage.getItem(`dish-${dishId}-sold`)) || 0;

      setDish({
        ...foundDish,
        sold: savedSold, // Load real sold count
      });
    }
      // Views are loaded but not modified here
      const savedViews = localStorage.getItem(`dish-${dishId}-views`);
      setViews(savedViews ? parseInt(savedViews) : 0);
    } 
  }, [dishId, getDishById, isLoading]);



 

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (dish) {
      addToCart(dish, quantity);
      // Afficher une notification de succès
    }
  };

  const handleAddReview = (newReview)=>{
    const updatedDish ={
      ...dish,
      reviews:[...dish.reviews,newReview]
    };
    setDish(updatedDish); 
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!dish) {
    return <div className="not-found">Dish not found</div>;
  }

  return (
    <div className="dish-detail-page">
      <div className="breadcrumb">
        <Link to="/">Welcome</Link> &gt; 
        <Link to="/menu">Menu</Link> &gt; 
        <Link to={`/category/${dish.categoryId}`}>{dish.categoryName}</Link> &gt; 
        <span>{dish.name}</span>
      </div>

      <div className="dish-detail-container">
        <div className="dish-image-container">
          <img src={dish.image} alt={dish.name} className="dish-image" />
          
        </div>

        <div className="dish-info-container">
          <h1 className="dish-name">{dish.name}</h1>
          
          <div className="dish-meta">
            <div className="dish-rating">
              <span className="stars">{'★'.repeat(Math.floor(dish.rating))}</span>
              <span className="rating-value">{dish.rating.toFixed(1)}</span>
              <span className="reviews-count"></span>
            </div>
            <div className="dish-price">
               <span className="price-label">Price:</span>
               <span className="price-amount"> {dish.price}</span>
               <span className="currency-icon">₫</span>
              </div>
            </div>
          
            <h2 className="dish-views"><FaEye /> Views : {views}</h2>
            <h3 className="solds"><MdSell /> Sold : {dish.sold || 0}</h3>
             <p className="dish-description">{dish.description}</p>

          <div className="dish-actions">
            <div className="quantity-selector">
              <button 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="quantity-btn"
              >
              -
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={handleQuantityChange}
                min="1"
                className="quantity-input"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              > +
              
              
              </button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to cart
            </button>
          </div>

          {dish.dietary && dish.dietary.length > 0 && (
            <div className="dietary-info">
              {dish.dietary.map(diet => (
                <span key={diet} className="dietary-tag">{diet}</span>
              ))}
            </div>
          )}
        </div>
      </div> <div className="dish-tabs">
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'description' ? 'active' :''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
          <button 
            className={`tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
            onClick={() => setActiveTab('nutrition')}
          >
            Nutritional Information
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews 
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-tab">
              <p>{dish.longDescription || dish.description}</p>
              <p>This traditional Algerian dish is carefully prepared according to authentic recipes passed down from generation to generation.</p>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="ingredients-tab">
              <h3>Ingrédients</h3>
              <ul className="ingredients-list">
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="nutrition-tab">
              <h3>Nutritional values</h3>
              <NutritionInfo nutritionInfo={dish.nutritionInfo} />
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-tab">
              <h3>customer reviews</h3>
              <ReviewList reviews={dish.reviews} />
              <ReviewForm dishId={dish.id} 
              onAddReview={handleAddReview}  />
            </div>
          )}
        </div>
      </div>
    </div>
      
  );
};

export default DishDetailPage; 
