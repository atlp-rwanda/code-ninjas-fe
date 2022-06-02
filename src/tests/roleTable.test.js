import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { screen, render as rtlRender, cleanup } from '@testing-library/react';
import store from '../redux/store';
import UserRole from '../components/role/table';

const persistor = persistStore(store);
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>{component}</BrowserRouter>
      </PersistGate>
    </Provider>
  );

describe('IT SHOULD RENDER USER & ROLE TABLE', () => {
  test('it should render ROLE TABLE component', () => {
    render(<UserRole />);
    const table = screen.getByTestId('userTable');
    expect(table).toBeInTheDocument();
  });

  test('Table should have text message in table row if no data', () => {
    const { container } = render(<UserRole />);
    const rowBody = container.querySelector('.MuiTableCell-body');
    const text = 'No records to display';
    expect(rowBody).toHaveTextContent(text);
  });

  test('Table should have TOOL BAR', () => {
    const { container } = render(<UserRole />);
    const rowBody = container.querySelector('.MuiToolbar-gutters');
    expect(rowBody).toBeInTheDocument();
  });

  test('Table should have table row body', () => {
    const { container } = render(<UserRole />);
    const rowBody = container.querySelector('.MuiTableCell-paddingCheckbox');
    expect(rowBody).toBeInTheDocument();
  });
  test('Table should have text message in table row if no data', () => {
    const { container } = render(<UserRole />);
    const rowBody = container.querySelector('.MuiTableCell-alignLeft');
    const text = 'User Name';
    expect(rowBody).toHaveTextContent(text);
  });
  afterEach(cleanup);
});
