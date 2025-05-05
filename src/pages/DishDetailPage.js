// DishDetailPage.js - Page de détail d'un plat

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMenu } from '../context/MenuContext';
import { useCart } from '../context/CartContext';
import './DishDetailPage.css';

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

  useEffect(() => {
    if (!isLoading) {
      const foundDish = getDishById(dishId);
      setDish(foundDish);
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

  if (isLoading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!dish) {
    return <div className="not-found">Plat non trouvé</div>;
  }

  return (
    <div className="dish-detail-page">
      <div className="breadcrumb">
        <Link to="/">Accueil</Link> &gt; 
        <Link to="/menu">Menu</Link> &gt; 
        <Link to={`/category/${dish.categoryId}`}>{dish.categoryName}</Link> &gt; 
        <span>{dish.name}</span>
      </div>

      <div className="dish-detail-container">
        <div className="dish-image-container">
          <img src={dish.image} alt={dish.name} className="dish-image" />
          {dish.videoUrl && (
            <a href={dish.videoUrl} target="_blank" rel="noopener noreferrer" className="video-link">
              <i className="fa fa-play-circle"></i> Voir la vidéo de préparation
            </a>
          )}
        </div>

        <div className="dish-info-container">
          <h1 className="dish-name">{dish.name}</h1>
          
          <div className="dish-meta">
            <div className="dish-rating">
              <span className="stars">{'★'.repeat(Math.floor(dish.rating))}</span>
              <span className="rating-value">{dish.rating.toFixed(1)}</span>
              <span className="reviews-count">({dish.reviews.length} avis)</span>
            </div>
            <div className="dish-sales">{dish.salesCount || 0} ventes</div>
            <div className="dish-price">{dish.price.toFixed(2)} ₫ </div>
          </div>

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
              >
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Ajouter au panier
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
      </div>

      <div className="dish-tabs">
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingrédients
          </button>
          <button 
            className={`tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
            onClick={() => setActiveTab('nutrition')}
          >
            Informations nutritionnelles
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Avis ({dish.reviews.length})
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-tab">
              <p>{dish.longDescription || dish.description}</p>
              <p>Ce plat traditionnel algérien est préparé avec soin selon les recettes authentiques transmises de génération en génération.</p>
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
              <h3>Valeurs nutritionnelles</h3>
              <NutritionInfo nutritionInfo={dish.nutritionInfo} />
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-tab">
              <h3>Avis clients</h3>
              <ReviewList reviews={dish.reviews} />
              <ReviewForm dishId={dish.id} />
            </div>
          )}
        </div>
      </div>

      {dish.relatedDishes && dish.relatedDishes.length > 0 && (
        <div className="related-dishes">
          <h2>Vous pourriez aussi aimer</h2>
          <div className="related-dishes-grid">
            {dish.relatedDishes.map(relatedDish => (
              <Link to={`/dish/${relatedDish.id}`} key={relatedDish.id} className="related-dish-card">
                <img src={relatedDish.image} alt={relatedDish.name} />
                <h3>{relatedDish.name}</h3>
                <div className="related-dish-price">{relatedDish.price.toFixed(2)} €</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DishDetailPage;