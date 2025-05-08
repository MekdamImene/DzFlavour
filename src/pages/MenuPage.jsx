
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import DishCard from '../components/DishCard';
import { useMenu } from '../context/MenuContext';
import './MenuPage.css'; 

const MenuPage = () => {
  const { categoryId } = useParams();
  const { categories, getDishesByCategory, isLoading } = useMenu();
  const [activeCategory, setActiveCategory] = useState(categoryId || 'all');
  const [searchQuery, setSearchQuery] = useState('');


  const dishes = getDishesByCategory(activeCategory);


  const filteredDishes = searchQuery.trim() === '' 
    ? dishes 
    : dishes.filter(dish => 
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase())
      );


  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
  };


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
            <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Search for a dish..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <img src="/images/search-b.png" alt="search icon"
            className="search-icon" />
          </div>
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
            <div className="loading">Loading menu...</div>
          ) : filteredDishes.length === 0 ? (
            <div className="no-results">
              <p>No dishes match your search.</p>
            </div>
          ) : (
            <div className="dishes-grid">
              {filteredDishes.map(dish => (
                <div className="dish-col" key={dish.id}>
                  <DishCard dish={dish} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      


    </div>
  );
};

export default MenuPage;