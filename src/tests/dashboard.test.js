import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DashboardApp from '../pages/DashboardApp';
import Chat from '../pages/Chat';
import Accommodations from '../pages/Accommodations';
import Profile from '../pages/Profile';
import TripRequest from '../pages/TripRequest';
import Users from '../pages/Users';

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

describe('Dashboard Users Page Component', () => {
  beforeAll(() => {
    render(<Users />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Users';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Users />).toJSON();
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

describe('Dashboard Trip Request Page Component', () => {
  beforeAll(() => {
    render(<TripRequest />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Trip Request';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('Should Take Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<TripRequest />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  afterAll(cleanup);
});
