import React from 'react';
import {
  Grid, AppBar, Toolbar, IconButton,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { DateTime } from 'luxon';

import TagCloud from '../../components/tagcloud/Tagcloud';
import Counter from '../../components/counter/Counter';

export default function Home() {
  const carCountStart = 2805839;
  const carCountTarget = 2805839 + 88000 + 100000;
  const carCountDateStart = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
  const carCountDateEnd = DateTime.fromObject({ year: 2021, month: 12, day: 31 });

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
      <Grid item xs={12}>
        <h1>BAN CARS</h1>
      </Grid>
      <Grid item xs={3}>
        <Counter
          startDate={carCountDateStart}
          targetDate={carCountDateEnd}
          startCount={carCountStart}
          targetCount={carCountTarget}
        />
      </Grid>
      <Grid item xs={3}>
        <TagCloud />
      </Grid>
      <Grid />
    </Grid>
  );
}
