
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DishCard from '../components/DishCard';
import { useMenu } from '../context/MenuContext';




const CategoryPage = () => {
  const { categoryId } = useParams();
  const { categories, getDishesByCategory, isLoading } = useMenu();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState(null);

  // Find the current category
  useEffect(() => {
    if (categoryId && categories.length > 0) {
      const category = categories.find(cat => cat.id === categoryId);
      setCurrentCategory(category || null);
    }
  }, [categoryId, categories]);

  const dishes = getDishesByCategory(categoryId);

  // Filter by search
  const filteredDishes = searchQuery.trim() === ''
    ? dishes
    : dishes.filter(dish =>
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (!currentCategory && !isLoading) {
    return (
      <div className="category-page">
        <Header />
        <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
          <h2>Catégorie non trouvée</h2>
          <p>La catégorie que vous recherchez n'existe pas.</p>
          <Link to="/menu" className="btn btn-primary">Retour au menu</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="category-page">
      <Header />
      
      <section
        className="category-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/plat_algerien_${categoryId === 'entrees' ? 'tajine' : categoryId === 'plats-principaux' ? 'couscous' : categoryId === 'specialites-regionales' ? 'assortiment' : 'tajine_tomate'}.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          marginTop: 'var(--header-height)'
        }}
      >
        <div className="container">
          <h1>{currentCategory?.name || 'Chargement...'}</h1>
          <p>{currentCategory?.description || ''}</p>
          <div className="search-container mt-3">
            <input 
              type="text" 
              placeholder="Rechercher un plat dans cette catégorie..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control"
            />
          </div>
        </div>
      </section>

      <section className="category-section py-5">
        <div className="container">
          <div className="mb-4">
            <Link to="/menu" className="btn btn-outline-secondary">
              ← Toutes les catégories
            </Link>
          </div>

          {isLoading ? (
            <div className="loading">Chargement des plats...</div>
          ) : filteredDishes.length === 0 ? (
            <div className="no-results">
              <p>Aucun plat ne correspond à votre recherche.</p>
            </div>
          ) : (
            <>
              <h2 className="mb-4">Nos {currentCategory?.name}</h2>
              <div className="row">
                {filteredDishes.map(dish => (
                  <div className="col-md-4" key={dish.id}>
                    <DishCard dish={dish} />
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-5">
            <h3>Autres catégories</h3>
            <div className="d-flex flex-wrap gap-2">
              {categories
                .filter(cat => cat.id !== categoryId)
                .map(category => (
                  <Link 
                    key={category.id} 
                    to={`/menu/${category.id}`} 
                    className="btn btn-outline-primary"
                  >
                    {category.name}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;