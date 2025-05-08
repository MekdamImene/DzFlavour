import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const {cartItems , clearCart } = useCart();

 
    
  useEffect(() => {
    if (cartItems.length > 0) {
    clearCart();
    }
  }, [cartItems, clearCart]);
  return (
    <div className="checkout-success">
      <div className="success-box">
        <div className="checkmark">✓</div>
        <h2>Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order has been placed successfully.</p>
      </div>
    </div>
  );
};

export default CheckoutPage;

