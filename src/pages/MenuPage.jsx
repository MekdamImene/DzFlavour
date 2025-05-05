import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import DishCard from '../components/DishCard';
import { useMenu } from '../context/MenuContext';

const MenuPage = () => {
  const { categoryId } = useParams();
  const { categories, getDishesByCategory, isLoading } = useMenu();
  const [activeCategory, setActiveCategory] = useState(categoryId || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  // Obtenir les plats de la catégorie active
  const dishes = getDishesByCategory(activeCategory);

  // Filtrer les plats en fonction de la recherche
  const filteredDishes = searchQuery.trim() === '' 
    ? dishes 
    : dishes.filter(dish => 
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Changer de catégorie
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
  };

  // Gérer la recherche
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="menu-page">
      
      
      <section className="menu-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Discover our traditional Algerian dishes, prepared with fresh and authentic ingredients</p>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Rechercher un plat..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
      </section>
      
      <section className="menu-section">
        <div className="container">
          <div className="category-tabs">
            <button 
              className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              Tous
            </button>
            
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {isLoading ? (
            <div className="loading">Chargement du menu...</div>
          ) : filteredDishes.length === 0 ? (
            <div className="no-results">
              <p>Aucun plat ne correspond à votre recherche.</p>
            </div>
          ) : (
            <div className="dishes-grid">
              {filteredDishes.map(dish => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      
    </div>
  );
};

export default MenuPage;