// Header.jsx - Header component for the Algerian food website

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 
import './Header.css';


const Header = () => {
  const { cartItems } = useContext(CartContext); 
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">

      {/* Logo */}
      <div className="logo">
       <Link to="/">
       <img src="/images/logo-new.png" alt="DZ Flavour restaurant logo" className="restaurant-logo" />{/*add*/}
       </Link>
       </div>
       

        {/* Navigation links */}
        <nav className="main-nav">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
          {/*add search bar*/}
          <div className='search-box'>
            <input type="text" placeholder='search'/>
            <img src="/images/search-b.png" alt="search icon"/>
            </div>
            


        {/* Cart icon and Sign in button */}
        <div className="header-actions">
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </Link>
        
           
           {/*<Link to="/signin" className="sign-in-btn">
            sign in
            </Link>*/}
          </div> 
        </div>
          
      
    </header>
  );
};

export default Header;
