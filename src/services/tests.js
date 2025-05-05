// tests.js - Tests pour l'application de cuisine traditionnelle algérienne

const request = require('supertest');
const app = require('./server');

// Tests pour les routes API du menu
describe('API Menu', () => {
  // Test pour récupérer tout le menu
  test('GET /api/menu devrait retourner tout le menu', async () => {
    const response = await request(app).get('/api/menu');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('categories');
    expect(Array.isArray(response.body.categories)).toBeTruthy();
  });

  // Test pour récupérer toutes les catégories
  test('GET /api/menu/categories devrait retourner toutes les catégories', async () => {
    const response = await request(app).get('/api/menu/categories');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  // Test pour récupérer une catégorie spécifique
  test('GET /api/menu/categories/:categoryId devrait retourner une catégorie spécifique', async () => {
    const categoryId = 'entrees';
    const response = await request(app).get(`/api/menu/categories/${categoryId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', categoryId);
    expect(response.body).toHaveProperty('dishes');
    expect(Array.isArray(response.body.dishes)).toBeTruthy();
  });

  // Test pour récupérer un plat spécifique
  test('GET /api/menu/dishes/:dishId devrait retourner un plat spécifique', async () => {
    const dishId = 'couscous';
    const response = await request(app).get(`/api/menu/dishes/${dishId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', dishId);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('price');
  });

  // Test pour récupérer les plats populaires
  test('GET /api/menu/popular devrait retourner les plats populaires', async () => {
    const response = await request(app).get('/api/menu/popular');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('popular', true);
    }
  });
});

// Tests pour les routes API des commandes
describe('API Commandes', () => {
  // Test pour créer une nouvelle commande
  test('POST /api/orders devrait créer une nouvelle commande', async () => {
    const orderData = {
      order: {
        customer: {
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          phone: '0123456789',
          address: '123 Test Street',
          city: 'Test City',
          postalCode: '12345'
        },
        items: [
          {
            dishId: 'couscous',
            name: 'Couscous Royal',
            price: 14.99,
            quantity: 2
          }
        ],
        deliveryOption: 'standard'
      }
    };

    const response = await request(app)
      .post('/api/orders')
      .send(orderData);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('status', 'pending');
    expect(response.body).toHaveProperty('orderDate');
  });

  // Test pour récupérer une commande spécifique
  test('GET /api/orders/:orderId devrait retourner une commande spécifique', async () => {
    // Créer d'abord une commande
    const orderData = {
      order: {
        customer: {
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          phone: '0123456789',
          address: '123 Test Street',
          city: 'Test City',
          postalCode: '12345'
        },
        items: [
          {
            dishId: 'tajine-zitoune',
            name: 'Tajine Zitoune',
            price: 13.50,
            quantity: 1
          }
        ],
        deliveryOption: 'express'
      }
    };

    const createResponse = await request(app)
      .post('/api/orders')
      .send(orderData);
    
    const orderId = createResponse.body.id;
    
    // Récupérer la commande créée
    const getResponse = await request(app).get(`/api/orders/${orderId}`);
    
    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.body).toHaveProperty('id', orderId);
    expect(getResponse.body).toHaveProperty('customer');
    expect(getResponse.body).toHaveProperty('items');
  });
});

// Tests pour les routes API des réservations
describe('API Réservations', () => {
  // Test pour créer une nouvelle réservation
  test('POST /api/reservations devrait créer une nouvelle réservation', async () => {
    const reservationData = {
      reservation: {
        name: 'Test User',
        email: 'test@example.com',
        phone: '0123456789',
        date: '2025-05-15',
        time: '19:30',
        guests: 4,
        specialRequests: 'Table près de la fenêtre'
      }
    };

    const response = await request(app)
      .post('/api/reservations')
      .send(reservationData);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('status', 'confirmed');
    expect(response.body).toHaveProperty('createdAt');
  });
});

// Tests pour les routes API des avis
describe('API Avis', () => {
  // Test pour ajouter un avis sur un plat
  test('POST /api/reviews devrait ajouter un avis sur un plat', async () => {
    const reviewData = {
      dishId: 'couscous',
      review: {
        userName: 'Test User',
        rating: 5,
        comment: 'Excellent plat, très authentique !'
      }
    };

    const response = await request(app)
      .post('/api/reviews')
      .send(reviewData);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('success', true);
  });
});

// Tests pour les routes API des promotions
describe('API Promotions', () => {
  // Test pour récupérer toutes les promotions
  test('GET /api/promotions devrait retourner toutes les promotions', async () => {
    const response = await request(app).get('/api/promotions');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

// Tests pour la route de recherche
describe('API Recherche', () => {
  // Test pour rechercher des plats
  test('GET /api/search devrait retourner des résultats de recherche', async () => {
    const query = 'couscous';
    const response = await request(app).get(`/api/search?query=${query}`);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    if (response.body.length > 0) {
      expect(response.body[0].name.toLowerCase()).toContain(query.toLowerCase());
    }
  });

  // Test pour une recherche sans requête
  test('GET /api/search sans requête devrait retourner une erreur 400', async () => {
    const response = await request(app).get('/api/search');
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});

// Tests pour les routes non existantes
describe('Gestion des erreurs', () => {
  // Test pour une route non existante
  test('Route non existante devrait retourner une erreur 404', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('error', 'Route non trouvée');
  });
});