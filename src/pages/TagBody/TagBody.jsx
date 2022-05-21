import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TagBody() {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    const articlesResponse = await fetch('/data/articles.json');
    const articleData = await articlesResponse.json();
    setArticles(articleData.filter((a) => a.tags.includes(params.tag.toLowerCase())));
  }, []);

  return (
    <div>
      {articles.map((a) => <a href={a.url} key={a.url}>{a.title}</a>)}
    </div>
  );
}
