// MenuContext.js - Contexte pour la gestion des données du menu

import React, { createContext, useContext, useState, useEffect } from 'react';
import menuData from '../data/menuData'; // تأكد من المسار الصحيح


const MenuContext = createContext();

// مكون الـ Provider
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
        throw new Error('بيانات القائمة غير موجودة');
      }
    } catch (err) {
      setError('حدث خطأ أثناء تحميل البيانات');
      setIsLoading(false);
    }
  }, []);

  // دالة للحصول على طبق معين بواسطة الـ ID
  const getDishById = (dishId) => {
    for (const category of categories) {
      const dish = category.dishes.find(dish => dish.id === dishId);
      if (dish) return dish;
    }
    return null;
  };

  // دالة للحصول على الأطباق الشعبية
  const getPopularDishes = () => {
    return categories
      .flatMap(category => category.dishes)
      .filter(dish => dish.popular)
      .sort((a, b) => b.rating - a.rating);
  };

  // دالة للبحث عن الأطباق
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

  // دالة للحصول على الأطباق حسب الفئة
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
    throw new Error('يجب استخدام useMenu داخل MenuProvider');
  }
  return context;
};