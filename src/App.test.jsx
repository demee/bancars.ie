import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByAltText('g');
  expect(linkElements.length).toBe(765)
});
