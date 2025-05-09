import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Composants de layout
import Header from './components/Header';
import Footer from './components/Footer';
import CartProvider from './context/CartContext'; 

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CategoryPage from './pages/CategoryPage';
import DishDetailPage from './pages/DishDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
// Contextes
import { MenuProvider } from './context/MenuContext'; 

import './App.css';

function App() {
 

  return (
    <MenuProvider>
      <CartProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route 
  path="/dish/:dishId" 
  element={<DishDetailPage />} 
/>

              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </MenuProvider>
  );
}

export default App;
















