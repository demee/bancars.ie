import React, { useState } from 'react';
import {
  Container, Grid, AppBar, Toolbar, IconButton, Drawer, Box, ListItem, Divider,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import style from './Header.module.css';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer(openShut) {
    return function handleEvent() {
      setDrawerOpen(openShut);
    };
  }

  return (
    <>
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
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box>
          <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
            <Close />
          </IconButton>

          <Divider sx={{ mb: 2 }} />
          <ListItem>
            In the news
          </ListItem>
          <ListItem>
            Blog
          </ListItem>
          <ListItem>
            About
          </ListItem>
        </Box>
      </Drawer>

    </>
  );
}
