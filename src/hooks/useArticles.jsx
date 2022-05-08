import { useEffect } from 'react';

export default () => {
  useEffect(async () => {
    const articles = await fetch('/data/articles.json');
    return articles;
  }, []);
};
