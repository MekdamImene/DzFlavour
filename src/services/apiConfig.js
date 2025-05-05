// apiConfig.js - Configuration pour l'intégration des API dans l'application React

import { menuService, orderService, reservationService, reviewService, promotionService } from './api';

// Mise à jour du contexte MenuContext pour utiliser l'API
export const configureMenuContext = (setCategories, setIsLoading, setError) => {
  // Fonction pour charger les données du menu depuis l'API
  const loadMenuData = async () => {
    try {
      setIsLoading(true);
      const categories = await menuService.getCategories();
      setCategories(categories);
      setIsLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement des données du menu');
      setIsLoading(false);
      console.error('Erreur lors du chargement des données du menu:', err);
    }
  };

  // Fonction pour obtenir un plat spécifique par son ID
  const getDishById = async (dishId) => {
    try {
      return await menuService.getDish(dishId);
    } catch (err) {
      console.error(`Erreur lors de la récupération du plat ${dishId}:`, err);
      return null;
    }
  };

  // Fonction pour obtenir les plats populaires
  const getPopularDishes = async () => {
    try {
      return await menuService.getPopularDishes();
    } catch (err) {
      console.error('Erreur lors de la récupération des plats populaires:', err);
      return [];
    }
  };

  // Fonction pour rechercher des plats
  const searchDishes = async (query) => {
    if (!query) return [];
    
    try {
      return await menuService.searchDishes(query);
    } catch (err) {
      console.error('Erreur lors de la recherche de plats:', err);
      return [];
    }
  };

  return {
    loadMenuData,
    getDishById,
    getPopularDishes,
    searchDishes
  };
};

// Configuration pour le service de commande
export const configureOrderService = () => {
  // Fonction pour créer une nouvelle commande
  const createOrder = async (orderData) => {
    try {
      const result = await orderService.createOrder(orderData);
      return { success: true, data: result };
    } catch (err) {
      console.error('Erreur lors de la création de la commande:', err);
      return { 
        success: false, 
        error: err.response?.data?.error || 'Erreur lors de la création de la commande' 
      };
    }
  };

  // Fonction pour récupérer une commande
  const getOrder = async (orderId) => {
    try {
      const result = await orderService.getOrder(orderId);
      return { success: true, data: result };
    } catch (err) {
      console.error(`Erreur lors de la récupération de la commande ${orderId}:`, err);
      return { 
        success: false, 
        error: err.response?.data?.error || 'Erreur lors de la récupération de la commande' 
      };
    }
  };

  return {
    createOrder,
    getOrder
  };
};

// Configuration pour le service de réservation
export const configureReservationService = () => {
  // Fonction pour créer une nouvelle réservation
  const createReservation = async (reservationData) => {
    try {
      const result = await reservationService.createReservation(reservationData);
      return { success: true, data: result };
    } catch (err) {
      console.error('Erreur lors de la création de la réservation:', err);
      return { 
        success: false, 
        error: err.response?.data?.error || 'Erreur lors de la création de la réservation' 
      };
    }
  };

  return {
    createReservation
  };
};

// Configuration pour le service d'avis
export const configureReviewService = () => {
  // Fonction pour ajouter un avis
  const addReview = async (dishId, reviewData) => {
    try {
      const result = await reviewService.addReview(dishId, reviewData);
      return { success: true, data: result };
    } catch (err) {
      console.error('Erreur lors de l\'ajout de l\'avis:', err);
      return { 
        success: false, 
        error: err.response?.data?.error || 'Erreur lors de l\'ajout de l\'avis' 
      };
    }
  };

  return {
    addReview
  };
};

// Configuration pour le service de promotion
export const configurePromotionService = () => {
  // Fonction pour récupérer toutes les promotions
  const getPromotions = async () => {
    try {
      return await promotionService.getPromotions();
    } catch (err) {
      console.error('Erreur lors de la récupération des promotions:', err);
      return [];
    }
  };

  return {
    getPromotions
  };
};