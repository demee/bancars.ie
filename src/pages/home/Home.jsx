import React from 'react';
import {
  Grid, AppBar, Toolbar, IconButton,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

import TagCloud from '../../components/tagcloud/Tagcloud';

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Menu />
              &nbsp;
              BAN CARS
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <TagCloud />
      </Grid>
      <Grid />
    </Grid>
  );
}
