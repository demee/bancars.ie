import React from 'react';
import {
  max, min, scaleLinear,
} from 'd3';
import { useFetch } from 'usehooks-ts';

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
    const xScale = scaleLinear().domain([min(years), max(years)]).range([marginLeft, width]);
    const yScale = scaleLinear().domain([min(count), max(count)]).range([height - marginBottom, 0]);
    const xTicks = xScale.ticks();
    const yTicks = yScale.ticks();
    return (
      <svg viewBox={viewBox}>
        {xTicks.map((t) => (
          <text x={xScale(t)} y={height} key={t}>
            {t}
          </text>
        ))}
        {yTicks.map((t) => <text x={0} y={yScale(t)} key={t}>{t}</text>)}
        {data.data.map((d) => <text x={xScale(d.year)} y={yScale(d.count)} key={d.count}>🚘</text>)}
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
