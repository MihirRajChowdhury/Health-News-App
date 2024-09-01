import React, { useState } from 'react';
import NewsList from './NewsList';
import Bookmark from './Bookmark';
import CategoryFilter from './CategoryFilter';

// We are setting the category here and then displaying the newsList here.

function App() {
  const [category, setCategory] = useState('health');

  return (
    <div>
      <CategoryFilter setCategory={setCategory} />
      <NewsList category={category} />
      <Bookmark />
    </div>
  );
}

export default App;
