import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

// Fetchning the article from the api and storing it in useEffect hook than showing the individual articles one by one using NewsItem.

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            category,
            apiKey: Process.env.NewsKey,
          },
        });
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
