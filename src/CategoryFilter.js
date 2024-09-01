import React from 'react';

const CategoryFilter = ({ setCategory }) => {
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
