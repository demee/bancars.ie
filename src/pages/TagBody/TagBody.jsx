import React from 'react';
import { useParams } from 'react-router-dom';

export default function TagBody() {
  const params = useParams();

  return (
    <div>
      Articles:
      {' '}
      { params.tag }
    </div>
  );
}
