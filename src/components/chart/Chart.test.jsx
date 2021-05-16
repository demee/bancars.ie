import React from 'react';
import { render, screen } from '@testing-library/react';

import { act } from 'react-dom/test-utils';
import Chart from './Chart';

test('renders Chart', () => {
  render(<Chart />);
  screen.findAllByText('Banana').then((elements) => {
    expect(elements.length).toEqual(1);
  });
});
