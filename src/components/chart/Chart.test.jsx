import React from 'react';
import { render, screen } from '@testing-library/react';
import Chart from './Chart';

describe('chart', () => {
  it('should renders a chart', async () => {
    expect.assertions(1);
    render(<Chart />);
    const elements = await screen.findAllByTestId('custom-element');
    expect(elements).toHaveLength(1);
  });
});
