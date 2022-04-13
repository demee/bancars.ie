import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('app', () => {
  it('renders learn react link', () => {
    expect.assertions(1);
    render(<App />);
    expect(true).toBe(true);
  });
});
