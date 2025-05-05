import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from '../context/MenuContext';
import  CartProvider  from '../context/CartContext';
import App from '../App';

// Import the API services
import {
  configureMenuContext,
  configureOrderService,
  configureReservationService,
  configureReviewService,
  configurePromotionService
} from './apiConfig'; // Ensure the path is correct

// Main integration component
const IntegratedApp = () => {
  // Using useEffect to initialize the app when the component loads
  useEffect(() => {
    // Initialize the API services
    initializeApp();
  }, []);

  return (
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  );
};

// Function to initialize the application with the API services
const initializeApp = () => {
  // Configure the API services
  const menuServices = configureMenuContext();
  const orderServices = configureOrderService();
  const reservationServices = configureReservationService();
  const reviewServices = configureReviewService();
  const promotionServices = configurePromotionService();

  // Expose the services for global use (for example, in window)
  window.apiServices = {
    menu: menuServices,
    order: orderServices,
    reservation: reservationServices,
    review: reviewServices,
    promotion: promotionServices
  };
};

export default IntegratedApp;