// CartPage.js - Page du panier d'achat

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, getCartTotal, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your shopping cart is empty</h1>
        <p>You have not yet added any dishes to your basket.</p>
        <Link to="/menu" className="btn btn-primary">See the menu</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-header">
            <div className="cart-header-product">Product</div>
            <div className="cart-header-price">Price</div>
            <div className="cart-header-quantity">Quantity</div>
            <div className="cart-header-total">Total</div>
            <div className="cart-header-actions"></div>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-product">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                </div>
              </div>

              <div className="cart-item-price">{item.price.toFixed(2)} €</div>

              <div className="cart-item-quantity">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="quantity-btn"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                {(item.price * item.quantity).toFixed(2)} €
              </div>

              <div className="cart-item-actions">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{getCartTotal().toFixed(2)} €</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fees</span>
            <span>3.00 €</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>{(getCartTotal() + 3).toFixed(2)} €</span>
          </div>

          <button 
            onClick={handleCheckout}
            className="checkout-btn"
          >
            Proceed to checkout
          </button>

          <div className="cart-actions">
            <Link to="/menu" className="continue-shopping">
              Continue shopping
            </Link>
            <button 
              onClick={clearCart}
              className="clear-cart"
            >
              Empty the basket
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;