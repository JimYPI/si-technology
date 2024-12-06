import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Update this test to match your actual content
    const element = screen.getByRole('navigation');
    expect(element).toBeInTheDocument();
  });
});
