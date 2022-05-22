import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { screen, render as rtlRender, cleanup } from '@testing-library/react';
import user from '@testing-library/user-event';
import store from '../redux/store';
import LoginForm from '../components/login/loginForm';

const persistor = persistStore(store);
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>{component}</BrowserRouter>
      </PersistGate>
    </Provider>
  );

describe('Render LOGIN page', () => {
  test('it should render LOGIN component', () => {
    render(<LoginForm />);

    const Login = screen.getByTestId('loginForm');
    expect(Login).toBeInTheDocument();
  });
  afterEach(cleanup);
});

test('button should not be disabled', () => {
  const { getByTestId } = render(<LoginForm />);
  const button = getByTestId('submit');
  expect(button.disabled).toBe(false);
});

test('tiltle should be in the dom', () => {
  const { getByTestId } = render(<LoginForm />);
  const title = getByTestId('title');
  expect(title).toBeInTheDocument();
});

test('it should have email input box', () => {
  render(<LoginForm />);

  const Login = screen.getByLabelText('Email');
  expect(Login).toBeInTheDocument();
});

test('it should have password input box', () => {
  render(<LoginForm />);

  const Login = screen.getByLabelText('Password');
  expect(Login).toBeInTheDocument();
});
test('it should check if checkbox is available', () => {
  render(<LoginForm />);

  const Login = screen.getByLabelText('Show password');
  expect(Login).toBeInTheDocument();
});
test('it should if checkbox is checked', () => {
  render(<LoginForm />);

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
test('it should have this text', () => {
  render(<LoginForm />);
  const email = screen.getByLabelText('Email');
  user.type(email, '');

  expect(email).toBeInTheDocument();
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});
test('button should be desabled when email filled is empty', () => {
  const { getByTestId } = render(<LoginForm />);
  const email = screen.getByLabelText('Email');
  user.type(email, '');
  const submit = screen.getByTestId('submit');
  user.click(submit);
  const button = getByTestId('submit');
  expect(button.disabled).toBe(false);
});

test('button should be desabled when password filled is empty', async () => {
  render(<LoginForm />);
  const password = screen.getByLabelText('Password');
  user.type(password, '');
  const submit = screen.getByTestId('submit');
  user.click(submit);
  expect(submit.disabled).toBe(false);
});
