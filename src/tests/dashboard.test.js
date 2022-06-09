import React from 'react';
import { screen, render as rtlRender, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import DashboardApp from '../pages/DashboardApp';
import Chat from '../pages/Chat';
import Accommodations from '../pages/Accommodations';
import store from '../redux/store';

const persistor = persistStore(store);
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>{component}</BrowserRouter>
      </PersistGate>
    </Provider>
  );

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
