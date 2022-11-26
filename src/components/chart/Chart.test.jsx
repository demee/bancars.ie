import React from 'react';
import { render } from '@testing-library/react';
import Chart from './Chart';

describe('chart', () => {
  it('should renders a chart', async () => {
    const chartElement = render(<Chart />);
    expect(chartElement).toBeTruthy();
  });
});
