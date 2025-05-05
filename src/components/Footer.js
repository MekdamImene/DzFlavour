// Footer.js - Composant de pied de page pour le site web de cuisine algérienne

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo.svg" alt="Flavors of Algeria" className="logo-img" />
            <h3>Flavors of Algeria</h3>
            <p>Traditional Algerian cuisine</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Welcom</Link></li>
              <li><Link to="/menu">Menu</Link></li>
          
              <li><Link to="/about">A Propos</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p><i className="fas fa-map-marker-alt"></i> 123 Gastronomy Street, 75001 Alger</p>
            <p><i className="fas fa-phone"></i> +33 1 23 45 67 89</p>
            <p><i className="fas fa-envelope"></i> contact@saveursdalgerie.fr</p>
          </div>
          
          <div className="footer-hours">
            <h4>Opening hours</h4>
            <p><strong>Mon- Thu:</strong> 11h00 - 22h00</p>
            <p><strong>Fri - Satu:</strong> 11h00 - 23h00</p>
            <p><strong>sun:</strong> 12h00 - 22h00</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Flavors of Algeria. All rights reserved. </p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;