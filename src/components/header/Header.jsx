import React, { useState } from 'react';
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Home,
  Menu,
  Newspaper,
  Book,
  QuestionMark,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
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
          <Container>
            <div className={style.banner}>
              <span className={style.bannerText}>
                BAN CARS
              </span>
              <sup>*, **</sup>
            </div>
          </Container>
        </Grid>
      </Grid>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box className={style.drawer}>
          <Link class={style.link} to="/">
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
          <Link class={style.link} to="/news">
            <ListItemButton>
              <ListItemIcon>
                <Newspaper sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary="In the news" />
            </ListItemButton>
          </Link>
          <Link class={style.link} to="/blog">
            <ListItemButton>
              <ListItemIcon>
                <Book sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </Link>
          <Link class={style.link} to="/about">
            <ListItemButton>
              <ListItemIcon>
                <QuestionMark sx={{ color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </Link>
        </Box>
      </Drawer>

    </>
  );
}
