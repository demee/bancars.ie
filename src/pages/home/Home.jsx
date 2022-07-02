import React from 'react';
import {
  Grid, Container,
} from '@mui/material';
import { DateTime } from 'luxon';

import TagCloud from '../../components/tagcloud/Tagcloud';
import Counter from '../../components/counter/Counter';
import Header from '../../components/header/Header';
import BlackBox from '../../components/blackbox/BlackBox';

export default function Home() {
  const carCountStart = 2805839;
  const carCountTarget = 2805839 + 88000 + 100000;
  const carCountDateStart = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
  const carCountDateEnd = DateTime.fromObject({ year: 2021, month: 12, day: 31 });

  return (
    <Container>
      <Header />
      <Grid container>
        <Grid item xs={12} sm={6} lg={3}>
          <BlackBox>
            <Counter
              startDate={carCountDateStart}
              targetDate={carCountDateEnd}
              startCount={carCountStart}
              targetCount={carCountTarget}
            />
          </BlackBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <BlackBox>
            <TagCloud />
          </BlackBox>
        </Grid>

        <Grid />
      </Grid>
    </Container>
  );
}
