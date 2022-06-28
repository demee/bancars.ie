import React from 'react';
import {
  Grid, AppBar, Toolbar, IconButton,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function Header() {
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
    </Grid>
  );
}
