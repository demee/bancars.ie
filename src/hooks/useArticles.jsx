import { useEffect, useState } from 'react';

export default function useArticles() {
  const [articles, setArticles] = useState();
  useEffect(async () => {
    const articleData = await fetch('/data/articles.json');
    setArticles(articleData);
  }, []);

  return articles;
};
