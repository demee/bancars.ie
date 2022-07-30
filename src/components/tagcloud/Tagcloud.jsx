import React, { useEffect, useState } from 'react';
import WordCloud from 'react-d3-cloud';
import { useNavigate } from 'react-router-dom';

export default function Tagcloud() {
  const [width, height] = [700, 400];
  const [words, setWords] = useState([]);

  const navigate = useNavigate();

  useEffect(async () => {
    const wordDataResponse = await fetch('data/words.json');
    setWords(await wordDataResponse.json());
  }, []);

  return (
    <WordCloud
      width={width}
      height={height}
      data={words}
      font="Montserrat Alternates"
      fontSize={(word) => Math.log2(word.value) * 5}
      spiral="rectangular"
      fill="#000"
      rotate={0}
      padding={5}
      random={() => 0}
      onWordClick={(event) => {
        // eslint-disable-next-line no-debugger
        navigate(`tags/${event.target.innerHTML}`);
      }}
      onWordMouseOver={(event) => {
        // eslint-disable-next-line no-param-reassign
        event.target.style.cursor = 'pointer';
        // eslint-disable-next-line no-param-reassign
        event.target.style.fontWeight = 'bold';
      }}
      onWordMouseOut={(event) => {
        // eslint-disable-next-line no-param-reassign
        event.target.style.fontWeight = 'normal';
      }}
    />
  );
}
