import React, { useEffect, useState } from 'react';
import {
  Container,
  List,
  ListItem,
} from '@mui/material';
import Header from '../../components/header/Header';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    const articlesResponse = await fetch('/data/articles.json');
    const articleData = await articlesResponse.json();
    setArticles(articleData);
  }, []);

  return (
    <Container>
      <Header />
      <List>
        {articles.map((a) => <ListItem><a href={a.url} key={a.url}>{a.title}</a></ListItem>)}
      </List>
    </Container>
  );
}
