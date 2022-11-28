import React from 'react';
import {
  max, min, scaleLinear,
} from 'd3';
import { useFetch } from 'usehooks-ts';
import styles from './Chart.module.css';

const width = 800;
const height = 300;
const marginLeft = 100;
const marginBottom = 50;
const viewBox = `0,0,${width},${height}`;

export default function Chart() {
  const { data, error } = useFetch('/data/cars.json');
  if (data && !error) {
    const years = data.data.map((d) => d.year);
    const count = data.data.map((d) => d.count);
    const minYears = min(years);
    const minCount = min(count);
    const maxYears = max(years);
    const maxCount = max(count);
    const xScale = scaleLinear().domain([minYears, maxYears]).range([marginLeft, width]);
    const yScale = scaleLinear().domain([minCount, maxCount]).range([height - marginBottom, 0]);
    const xTicks = xScale.ticks(years.length);
    const yTicks = yScale.ticks();
    return (
      <svg viewBox={viewBox}>
        {xTicks.map((t) => (
          <text className={styles.axisText} x={xScale(t)} y={height} key={t}>
            {t}
          </text>
        ))}
        {yTicks.map((t) => (
          <text
            className={styles.axisText}
            x={0}
            y={yScale(t)}
            key={t}
          >
            {t}
          </text>
        ))}
        {data.data.map((d) => {
          const carStack = [];
          let pos = yScale(minCount) + 10;
          while (yScale(d.count) < pos) {
            carStack.push(
              <text
                className={styles.axisText}
                x={xScale(d.year) + 5}
                y={pos}
                key={d.count}
              >
                🚘
              </text>,
            );
            pos -= 10;
          }
          return carStack;
        })}
      </svg>
    );
  }

  return (
    <svg viewBox={viewBox}>
      {error && <text x={width / 2} y={height / 2}>🤪</text>}
      {!data && <text x={width / 2} y={height / 2}>💾</text>}
    </svg>
  );
}
