import React, { Fragment, useState } from 'react';
import {
  Container, Grid, AppBar, Toolbar, IconButton, Drawer, Box
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import style from './Header.module.css';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    // eslint-disable-next-line no-debugger
    // debugger;
    // eslint-disable-next-line prefer-rest-params, no-console
    console.log(arguments);
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)} // function that is called when the drawer should close
        onOpen={toggleDrawer(true)}
      >
        <Box>
          Bananananana
        </Box>
      </Drawer>
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
