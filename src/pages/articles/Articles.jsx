import React, { useEffect, useState } from 'react';
import {
  Container,
  List,
  ListItem,
} from '@mui/material';
import Header from '../../components/header/Header';

async function fetchArticles() {
  const articlesResponse = await fetch('/data/articles.json');
  const articleData = await articlesResponse.json();
  return articleData();
}

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => { (async () => setArticles(await fetchArticles()))(); }, []);

  return (
    <Container>
      <Header />
      <List>
        {articles.map((a) => <ListItem><a href={a.url} key={a.url}>{a.title}</a></ListItem>)}
      </List>
    </Container>
  );
}
