import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DashboardApp from '../pages/DashboardApp';
import Chat from '../pages/Chat';
import Accommodations from '../pages/Accommodations';
import Profile from '../pages/Profile';
import Users from '../pages/Users';
import TripRequest from '../pages/TripRequest';

describe('Dashboard Page Component', () => {
  beforeAll(() => {
    render(<DashboardApp />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Hi, Welcome back';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<DashboardApp />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  afterAll(cleanup);
});

describe('Dashboard Accommodations Page Component', () => {
  beforeAll(() => {
    render(<Accommodations />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Accommodations';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Accommodations />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  afterAll(cleanup);
});

describe('Dashboard Chat Page Component', () => {
  beforeAll(() => {
    render(<Chat />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Chat';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Chat />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  afterAll(cleanup);
});

describe('Dashboard Profile Page Component', () => {
  beforeAll(() => {
    render(<Profile />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Profile';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Profile />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  afterAll(cleanup);
});
