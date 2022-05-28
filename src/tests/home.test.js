import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Welcome from '../pages/index';

describe('Landing Page component', () => {
  beforeAll(() => {
    render(<Welcome />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Welcome to Barefoot Nomad';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Welcome />).toJSON();
    expect(renderedComponent).toMatchInlineSnapshot();
  });

  afterAll(cleanup);
});
