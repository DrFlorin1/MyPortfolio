// MoviesSection.js
import React, { useState } from 'react';
import './MoviesSection.css'; // Creăm acest fișier pentru stilurile specifice acestei componente

const MoviesSection = () => {
  const [category, setCategory] = useState('movies'); // Starea pentru categoria curentă (filme sau desene animate)

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="MoviesSection">
      <h2>Filme și Desene Animate</h2>
      <div className="filter-buttons">
        <button
          className={category === 'movies' ? 'active' : ''}
          onClick={() => handleCategoryChange('movies')}
        >
          Filme
        </button>
        <button
          className={category === 'cartoons' ? 'active' : ''}
          onClick={() => handleCategoryChange('cartoons')}
        >
          Desene animate
        </button>
      </div>
      {/* Aici poți adăuga componente pentru afișarea filmelor sau desenelor animate, în funcție de categoria curentă */}
    </div>
  );
};

export default MoviesSection;
