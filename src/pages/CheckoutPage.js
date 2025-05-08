import React, { useEffect,useRef } from 'react';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current || cartItems.length === 0) return;

    //  Mark as processed BEFORE running logic
    hasProcessed.current = true;
    if (cartItems.length > 0) {
      cartItems.forEach(item => {
        const soldKey = `dish-${item.id}-sold`;
        const currentSold = parseInt(localStorage.getItem(soldKey)) || 0;
        const updatedSold = currentSold + item.quantity;
        localStorage.setItem(soldKey, updatedSold);
        
      });
  
      clearCart(); // After sold is updated
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


