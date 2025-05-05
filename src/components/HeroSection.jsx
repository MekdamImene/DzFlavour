// HeroSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: "url('/images/foodalger.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "85vh",
        display: "flex",
        /*alignItems: "center",
        justifyContent: "center",
        textAlign: "center",*/
        color: "white",
        position: "relative",
      }}
    >
      <div className="hero-content">
       { /*<h1>Authentic Flavors of Algeria</h1>*/}
       <div className="hero-text-box">
        <p>Discover the flavors of traditional Algerian cuisine</p>
        </div>
        
        <Link to="/menu" className=" order-btn">Order Now</Link>
      
      </div>
    </section>
  );
};

export default HeroSection;