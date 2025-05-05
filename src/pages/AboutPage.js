// AboutPage.js - Page À Propos du site web de cuisine algérienne

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      
      
      <section className="about-hero">
        <div className="container">
          <h1>Our History</h1>
          <p>Discover the story and passion behind Saveurs dAlgérie</p>
        </div>
      </section>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/images/plat_algerien_repas_traditionnel.jpeg" alt="Notre restaurant" />
            </div>
            
            <div className="about-text">
              <h2>Our Passion for Algerian Cuisine</h2>
              <p>
              For over 20 years, our restaurant has been introducing you to the authentic flavors of Algerian cuisine. Our traditional recipes are prepared with fresh, high-quality ingredients, carefully selected to offer you an exceptional culinary experience.
              </p>
              <p>
              Our chef, originally from Constantine, learned the secrets of Algerian cuisine
from his grandmother. Today, he perpetuates this expertise by adding his
personal touch, while respecting the authenticity of the recipes
              </p>
              <p>
              At Saveurs d'Algérie, we invite you on a culinary journey through the
different regions of Algeria, from the mountains of Kabylie to the oases of the Sahara,
passing along the Mediterranean coast.
              </p>
            </div>
          </div>
          
          <div className="our-values">
            <h2>Nos Valeurs</h2>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3>Freshness</h3>
                <p>
                We use unique ingredients for cooking and cooking to prepare our places, 
                Guarantee this quality and save it optimally.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3>Authenticity</h3>
                <p>
                Our recipes respect Algerian culinary traditions, passed down from generation to generation, to offer you an authentic experience.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Passion</h3>
                <p>
                Our team shares a passion for Algerian cuisine and is committed to helping you discover its richness and diversity.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Friendliness</h3>
                <p>
                We create a warm and welcoming atmosphere where you can share
                friendly moments with family or friends.
                </p>
              </div>
            </div>
          </div>
          
          <div className="testimonials">
            <h2>What our customers say</h2>
            
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-rating">★★★★★</div>
                <p className="testimonial-text">
                  "The best couscous I've ever tasted! The atmosphere is warm and the service impeccable."
                </p>
                <p className="testimonial-author">Mohammed L.</p>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-rating">★★★★★</div>
                <p className="testimonial-text">
                  "The flavors are authentic and remind me of my childhood in Algeria. I highly recommend La Rechta!"
                </p>
                <p className="testimonial-author">Fatima B.</p>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-rating">★★★★☆</div>
                <p className="testimonial-text">
                  "Excellent food, fast service and the ability to order online is very convenient."
                </p>
                <p className="testimonial-author">Ahmed K.</p>
              </div>
            </div>
          </div>
          
          <div className="team-section">
            <h2>Notre Équipe</h2>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/chef.jpg" alt="Chef Karim" />
                </div>
                <h3>Karim Benali</h3>
                <p className="member-role">Chef</p>
                <p className="member-description">
                Originally from Constantine, Karim has over 25 years of experience in traditional Algerian cuisine.
                </p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/manager.jpg" alt="Directrice Amina" />
                </div>
                <h3>Amina Hadj</h3>
                <p className="member-role">Director</p>
                <p className="member-description">
                Amina ensures that every customer has an exceptional experience at Saveurs d'Algérie.
                </p>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/pastry-chef.jpg" alt="Chef Pâtissier Yacine" />
                </div>
                <h3>Yacine Khelif</h3>
                <p className="member-role">Pastry Chef</p>
                <p className="member-description">
                A specialist in oriental pastries, Yacine creates desserts that combine tradition and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default AboutPage;