import React from 'react';
import {
  Grid, Container, Divider,
} from '@mui/material';
import { DateTime } from 'luxon';

import TagCloud from '../../components/tagcloud/Tagcloud';
import Counter from '../../components/counter/Counter';
import Header from '../../components/header/Header';

export default function Home() {
  const carCountStart = 2805839;
  const carCountTarget = 2805839 + 88000 + 100000;
  const carCountDateStart = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
  const carCountDateEnd = DateTime.fromObject({ year: 2021, month: 12, day: 31 });

  return (
    <Container>
      <Header />
      <Grid container>
        <Container><h1>BAN CARS</h1></Container>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={3}>
          <Counter
            startDate={carCountDateStart}
            targetDate={carCountDateEnd}
            startCount={carCountStart}
            targetCount={carCountTarget}
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={3}>
          <TagCloud />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid />
      </Grid>
    </Container>
  );
}
