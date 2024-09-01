import React, { useState, useEffect } from 'react';


// Used to show the articles one by one using and bookmarking is stored in local storage so that it can be recovered whenever bookmarks are required.

const NewsItem = ({ article }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const isBookmarked = localStorage.getItem(article.url);
    setBookmarked(!!isBookmarked);
  }, [article.url]);

  const handleBookmark = () => {
    if (bookmarked) {
      localStorage.removeItem(article.url);
    } else {
      localStorage.setItem(article.url, JSON.stringify(article));
    }
    setBookmarked(!bookmarked);
  };

  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <button onClick={handleBookmark}>
        {bookmarked ? 'Remove Bookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default NewsItem;
