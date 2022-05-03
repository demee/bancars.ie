import React, { useEffect, useState } from 'react';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

export default function Tagcloud() {
  const [width, height] = [700, 400];
  const [words, setWords] = useState([]);

  useEffect(async () => {
    const wordDataResponse = await fetch('data/words.json');
    setWords(await wordDataResponse.json());
  }, []);

  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

  return (
    <WordCloud
      width={width}
      height={height}
      data={words}
      font="Arial"
      fontSize={(word) => Math.log2(word.value) * 5}
      spiral="rectangular"
      fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
      rotate={0}
      padding={5}
      random={() => 0}
    />
  );
}
