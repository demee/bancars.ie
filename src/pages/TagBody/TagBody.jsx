import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid, AppBar, Toolbar, IconButton,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function TagBody() {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    const articlesResponse = await fetch('/data/articles.json');
    const articleData = await articlesResponse.json();
    setArticles(articleData.filter((a) => a.tags.includes(params.tag.toLowerCase())));
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
      {articles.map((a) => <a href={a.url} key={a.url}>{a.title}</a>)}
    </Grid>
  );
}
