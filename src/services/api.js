import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const menuService = {
  getMenu: () => api.get('/menu').then(res => res.data),
  getCategories: () => api.get('/menu/categories').then(res => res.data),
  getCategory: (id) => api.get(`/menu/categories/${id}`).then(res => res.data),
  getDish: (id) => api.get(`/menu/dishes/${id}`).then(res => res.data),
  getPopularDishes: () => api.get('/menu/popular').then(res => res.data),
  searchDishes: (query) => api.get('/search', { params: { query } }).then(res => res.data),
};

export const orderService = {
  createOrder: (order) => api.post('/orders', order).then(res => res.data),
  getOrder: (id) => api.get(`/orders/${id}`).then(res => res.data),
  updateOrder: (id, updates) => api.patch(`/orders/${id}`, updates).then(res => res.data),
  cancelOrder: (id) => api.delete(`/orders/${id}`).then(res => res.data),
};

export const reservationService = {
  createReservation: (resv) => api.post('/reservations', resv).then(res => res.data),
  getReservation: (id) => api.get(`/reservations/${id}`).then(res => res.data),
  updateReservation: (id, updates) => api.patch(`/reservations/${id}`, updates).then(res => res.data),
  cancelReservation: (id) => api.delete(`/reservations/${id}`).then(res => res.data),
};

export const reviewService = {
  addReview: (dishId, review) => api.post('/reviews', { dishId, ...review }).then(res => res.data),
  getDishReviews: (dishId) => api.get(`/reviews/${dishId}`).then(res => res.data),
  deleteReview: (id) => api.delete(`/reviews/${id}`).then(res => res.data),
};

export const promotionService = {
  getPromotions: () => api.get('/promotions').then(res => res.data),
  getPromotion: (id) => api.get(`/promotions/${id}`).then(res => res.data),
};

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials).then(res => res.data),
  register: (userData) => api.post('/auth/register', userData).then(res => res.data),
  getUserProfile: () => api.get('/auth/profile').then(res => res.data),
};