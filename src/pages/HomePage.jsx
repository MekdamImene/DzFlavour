// HomePage.jsx - Page d'accueil du site dz-flavour

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard'; 
import HeroSection from '../components/HeroSection';
import { useMenu } from '../context/MenuContext';
import './HomePage.css';

const HomePage = () => {
  const { getPopularDishes, isLoading } = useMenu();

  const popularDishes = getPopularDishes();




  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <HeroSection />

      {/* Section des Plats Populaires */}
      <section className="popular-dishes-section" id="popular-dishes">
        <div className="container">
          <h2 className="section-title mb-4">Our Popular Dishes</h2>
          <p className="section-subtitle mb-5">Discover our best traditional Algerian dishes.</p>

          {isLoading ? (
            <div className="loading text-center">Chargement des plats...</div>
          ) : (
            <div className="row">
              {popularDishes.map((dish) => (
                <div className="col-md-4 mb-4" key={dish.id}>
                  <DishCard dish={dish} />
                  
                </div>
              ))}
            </div>
          )}
           <div className="view-all-container text-center mt-4"> 
            <Link to="/menu" className="btn btn-secondary">Voir Tout</Link>
          </div> 
        </div>
      </section>

    </div>
  );
};

export default HomePage;
