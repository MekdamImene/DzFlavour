// Footer.js - Composant de pied de page pour le site web de cuisine algérienne

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            
            <h3>Dz Flavour</h3>
            <p>Traditional Algerian cuisine</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links :</h4>
            <ul>
              <li><Link to="/">Welcom</Link></li>
              <li><Link to="/menu">Menu</Link></li>
          
              <li><Link to="/about">A Propos</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact :</h4>
            <p><i className="fas fa-map-marker-alt"></i> Streat Didouche Morad , Algiers</p>
            <p><i className="fas fa-phone"></i> +333 1 23 45 67 89</p>
            <p><i className="fas fa-envelope"></i> contact @ Dz_Flavour.com</p>
          </div>
          
          <div className="footer-hours">
            <h4> Opening hours : </h4>
            <p><strong>Mon- Thu:</strong> 11h00 - 22h00</p>
            <p><strong>Fri - Satu:</strong> 11h00 - 23h00</p>
            <p><strong>sun:</strong> 12h00 - 22h00</p>
          </div>
        </div>
        
        
        
      </div>
    </footer>
  );
};

export default Footer;