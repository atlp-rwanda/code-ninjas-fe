import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Welcome from '../components/Welcome';

describe('Welcome component', () => {
  beforeAll(() => {
    render(
      <Router>
        <Welcome />
      </Router>
    );
  });

  it('should have the right message in the dom', () => {
    const message = 'Welcome to Barefoot nomard';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
