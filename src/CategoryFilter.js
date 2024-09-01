import React from 'react';

// This will help to show the articles like the categories described in the array that is a category feature

const CategoryFilter = ({ setCategory}) => {
  const categories = ['health', 'science', 'technology', 'sports'];

  return (
    <div>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
