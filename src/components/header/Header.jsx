import React from 'react';
import {
  Container, Grid, AppBar, Toolbar, IconButton,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import style from './Header.module.css';

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
      <Grid className={style.container} item xs={12}>
        <Container><div className={style.banner}>&nbsp;BAN CARS</div></Container>
      </Grid>
    </Grid>
  );
}
