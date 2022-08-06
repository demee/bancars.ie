import React, { Fragment, useState } from 'react';
import {
  Container, Grid, AppBar, Toolbar, IconButton, Drawer,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import style from './Header.module.css';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const [anchor, setAnchor] = useState('left');
  let state = false;

  function toggleDrawer() {
    // eslint-disable-next-line no-debugger
    // debugger;
    // eslint-disable-next-line prefer-rest-params, no-console
    console.log(arguments);
    state = true;
  }

  return (
    <>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
      />
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid className={style.container} item xs={12}>
          <Container><div className={style.banner}>&nbsp;BAN CARS</div></Container>
        </Grid>
      </Grid>
    </>
  );
}
