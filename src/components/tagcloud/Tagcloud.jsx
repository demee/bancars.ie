import React, { useEffect, useState } from 'react';
import WordCloud from 'react-d3-cloud';

export default function Tagcloud() {
  const [width, height] = [700, 400];
  const [words, setWords] = useState([]);

  useEffect(async () => {
    const wordDataResponse = await fetch('data/words.json');
    setWords(await wordDataResponse.json());
  }, []);

  return (
    <WordCloud
      width={width}
      height={height}
      data={words}
      font="Arial"
      fontSize={(word) => Math.log2(word.value) * 5}
      spiral="rectangular"
      rotate={0}
      padding={5}
      random={() => 0}
    />
  );
}
