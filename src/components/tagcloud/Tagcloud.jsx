import React, { useState } from 'react';
import d3cloud from 'd3-cloud';

export default function Tagcloud() {
  const [words, setWords] = useState([]);
  const width = 500;
  const height = 500;
  const wordsData = [{
    text: 'Cars',
    size: 100,
  },
  {
    text: 'Pollution',
    size: 30,
  }];
  const layout = d3cloud()
    .size([width, height])
    .words(wordsData)
    .on('end', () => setWords(layout.words()))
    .start();

  return (
    <svg width={width} height={height}>
      {words.map((w) => <text key={w.text}>{w.text}</text>)}
    </svg>
  );
}
