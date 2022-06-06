import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { screen, render as rtlRender, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import store from '../redux/store';
import ResetForm from '../components/resetPassword/resetPassword';
import ForgotForm from '../components/forgetPassword/forgotPassword';

const persistor = persistStore(store);
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>{component}</BrowserRouter>
      </PersistGate>
    </Provider>
  );
describe('Render reset password page', () => {
  test('it should render reset component', () => {
    render(<ResetForm />);

    const Login = screen.getByTestId('resForm');
    expect(Login).toBeInTheDocument();
  });
});

test('it should pop an error if password is not filled correctly(less than 8 char)', async () => {
  render(<ResetForm />);
  const password = screen.getByLabelText(/New Password/i);
  user.type(password, 't');
  const submit = screen.getByTestId('submit');
  user.click(submit);
  await waitFor(() => {
    expect(
      screen.getByText(/Password must contain at least 8 characters/i)
    ).toBeInTheDocument();
  });
});

test('it should pop an error if password does not match)', async () => {
  render(<ResetForm />);
  const password = screen.getByLabelText(/New Password/i);
  const cPassword = screen.getByLabelText(/Confirm Password/i);
  user.type(password, 't');
  user.type(cPassword, 'XBOH');
  const submit = screen.getByTestId('submit');
  user.click(submit);
  await waitFor(() => {
    expect(screen.getByText(/Password does not match/i)).toBeInTheDocument();
  });
});

test('it should pop an error if password is not entered)', async () => {
  render(<ResetForm />);
  const submit = screen.getByTestId('submit');
  user.click(submit);
  await waitFor(() => {
    expect(screen.getByText(/Confirm your password/i)).toBeInTheDocument();
  });
});

test('button should not be disabled if form is filled correctly)', async () => {
  render(<ResetForm />);
  const submit = screen.getByTestId('submit');
  expect(submit.disabled).toBe(false);
});

test('it should pop an error if email is not entered)', async () => {
  render(<ForgotForm />);
  const submit = screen.getByTestId('submit');
  user.click(submit);
  await waitFor(() => {
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
});

test('it should pop an error if email is invalid)', async () => {
  render(<ForgotForm />);
  const email = screen.getByLabelText(/Email/i);
  user.type(email, 'tttt.com');
  const submit = screen.getByTestId('submit');
  user.click(submit);
  await waitFor(() => {
    expect(screen.getByText(/Enter a valid email/i)).toBeInTheDocument();
  });
});

test('it should render forgot password card', async () => {
  render(<ForgotForm />);
  const rowBody = screen.getByTestId('fogCard');
  await waitFor(() => {
    expect(rowBody).toBeInTheDocument();
  });
});

test('it should render forgot password title', async () => {
  render(<ForgotForm />);
  const rowBody = screen.getByTestId('fogTitle');
  await waitFor(() => {
    expect(rowBody).toBeInTheDocument();
  });
});

test('it should render forgot password display', async () => {
  render(<ForgotForm />);
  const rowBody = screen.getByTestId('fogdisplayer');
  await waitFor(() => {
    expect(rowBody).toBeInTheDocument();
  });
});

test('it should render forgot password text box', async () => {
  render(<ForgotForm />);
  const rowBody = screen.getByTestId('fogInputBox');
  await waitFor(() => {
    expect(rowBody).toBeInTheDocument();
  });
});
test('it should render forgot password container', async () => {
  render(<ForgotForm />);
  const rowBody = screen.getByTestId('fogMainContainer');
  await waitFor(() => {
    expect(rowBody).toBeInTheDocument();
  });
});

test('it should render forgot password form', async () => {
  render(<ForgotForm />);
  const rowBody = screen.getByTestId('regForm');
  await waitFor(() => {
    expect(rowBody).toBeInTheDocument();
  });
});
