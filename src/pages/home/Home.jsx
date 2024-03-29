import React from 'react';
import { Grid, Container } from '@mui/material';
import { DateTime } from 'luxon';
import Counter from '../../components/counter/Counter';
import Header from '../../components/header/Header';
import BlackBox from '../../components/blackbox/BlackBox';
import Footer from '../../components/footer/Footer';
import Chart from '../../components/chart/Chart';
import styles from './Home.module.css';

export default function Home() {
  const carCountStart = 2805839;
  const carCountTarget = 2805839 + 88000 + 100000;
  const carCountDateStart = DateTime.fromObject({ year: 2019, month: 12, day: 31 });
  const carCountDateEnd = DateTime.fromObject({ year: 2021, month: 12, day: 31 });

  return (
    <Container>
      <Header />
      <Grid container>
        <Grid item xs={12} sm={12} lg={12}>
          <BlackBox>
            <div className={styles.chartContainer}>
              <Chart />
            </div>
          </BlackBox>
        </Grid>
      </Grid>
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
            <h2>Cars produced</h2>
            <h1>24 Mt CO2eq</h1>
            <h2>in 2022</h2>
          </BlackBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <BlackBox>
            <h2>There were</h2>
            <h1>{156 * 9}</h1>
            <h2>serious</h2>
            <h2>injuries in 2022</h2>
          </BlackBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <BlackBox>
            <h2>There were</h2>
            <h1>156</h1>
            <h2>deaths in 2022</h2>
          </BlackBox>
        </Grid>
        <Grid />
      </Grid>
      <Grid><Footer /></Grid>
    </Container>
  );
}
