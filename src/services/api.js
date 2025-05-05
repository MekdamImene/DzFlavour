// api.js - Service d'API pour connecter le frontend au backend

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Services pour le menu
export const menuService = {
  // Récupérer tout le menu
  getMenu: async () => {
    try {
      const response = await api.get('/menu');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du menu:', error);
      throw error;
    }
  },

  // Récupérer toutes les catégories
  getCategories: async () => {
    try {
      const response = await api.get('/menu/categories');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
      throw error;
    }
  },

  // Récupérer une catégorie spécifique
  getCategory: async (categoryId) => {
    try {
      const response = await api.get(`/menu/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la catégorie ${categoryId}:`, error);
      throw error;
    }
  },

  // Récupérer un plat spécifique
  getDish: async (dishId) => {
    try {
      const response = await api.get(`/menu/dishes/${dishId}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du plat ${dishId}:`, error);
      throw error;
    }
  },

  // Récupérer les plats populaires
  getPopularDishes: async () => {
    try {
      const response = await api.get('/menu/popular');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des plats populaires:', error);
      throw error;
    }
  },

  // Rechercher des plats
  searchDishes: async (query) => {
    try {
      const response = await api.get('/search', { params: { query } });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche de plats:', error);
      throw error;
    }
  }
};

// Services pour les commandes
export const orderService = {
  // Créer une nouvelle commande
  createOrder: async (order) => {
    try {
      const response = await api.post('/orders', { order });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error);
      throw error;
    }
  },

  // Récupérer une commande spécifique
  getOrder: async (orderId) => {
    try {
      const response = await api.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la commande ${orderId}:`, error);
      throw error;
    }
  }
};

// Services pour les réservations
export const reservationService = {
  // Créer une nouvelle réservation
  createReservation: async (reservation) => {
    try {
      const response = await api.post('/reservations', { reservation });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la réservation:', error);
      throw error;
    }
  }
};

// Services pour les avis
export const reviewService = {
  // Ajouter un avis sur un plat
  addReview: async (dishId, review) => {
    try {
      const response = await api.post('/reviews', { dishId, review });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'avis:', error);
      throw error;
    }
  }
};

// Services pour les promotions
export const promotionService = {
  // Récupérer toutes les promotions
  getPromotions: async () => {
    try {
      const response = await api.get('/promotions');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des promotions:', error);
      throw error;
    }
  }
};

export default {
  menuService,
  orderService,
  reservationService,
  reviewService,
  promotionService
};