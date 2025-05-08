// MenuContext.js - Contexte pour la gestion des données du menu

import React, { createContext, useContext, useState, useEffect } from 'react';
import menuData from '../data/menuData'; 


const MenuContext = createContext();


export const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    try {
      if (menuData && menuData.categories) {
        const timer = setTimeout(() => {
          setCategories(menuData.categories);
          setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
      } else {
        throw new Error('error');
      }
    } catch (err) {
      setError('faile loding!');
      setIsLoading(false);
    }
  }, []);

 
  const getDishById = (dishId) => {
    for (const category of categories) {
      const dish = category.dishes.find(dish => dish.id === dishId);
      if (dish) return dish;
    }
    return null;
  };

 
  const getPopularDishes = () => {
    return categories
      .flatMap(category => category.dishes)
      .filter(dish => dish.popular)
      .sort((a, b) => b.rating - a.rating);
  };

  const searchDishes = (query) => {
    if (!query) return [];
    
    const lowerCaseQuery = query.toLowerCase();
    return categories
      .flatMap(category => category.dishes)
      .filter(dish => 
        dish.name.toLowerCase().includes(lowerCaseQuery) || 
        dish.description.toLowerCase().includes(lowerCaseQuery)
      );
  };


  const getDishesByCategory = (categoryId) => {
    if (categoryId === 'all') {
      return categories.flatMap(category => category.dishes);
    }
    return categories
      .filter(category => category.id === categoryId)
      .flatMap(category => category.dishes);
  };

  return (
    <MenuContext.Provider value={{
      categories,
      isLoading,
      error,
      getDishById,
      getPopularDishes,
      searchDishes,
      getDishesByCategory 
    }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('use useMenu in MenuProvider!');
  }
  return context;
}; 
// MenuContext.js - Context for menu data management